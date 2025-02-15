import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { faker } from '@faker-js/faker'
import { ElasticsearchService } from '@nestjs/elasticsearch';


@Injectable()
export class ProductsService {

  constructor(
    private readonly db: DbService,
    private readonly es: ElasticsearchService

  ) {

  }

  deleteAll() {
    return this.db.product.deleteMany({})
  }
  async _findAll() {

    const size = ['XS', 'S', 'M', 'L', 'XL']
    const colours = ['red', 'blue', 'white', 'black', 'green']
    const startTime = new Date().getTime()
    const data = await Promise.all([...Array<number>(1000)].map(async () => {
      const d = {
        name: faker.commerce.product(),
        desc: faker.commerce.productDescription(),
        picUrl: [faker.image.url()],
        price: +faker.commerce.price(),
        size,
        colours,
        tags: ['general']
      }

      const p = await this.db.product.create({ data: d })
      await this.es.index({ index: "products", id: p.id, document: d })
    }
    ))

    const endTime = new Date().getTime()
    console.log("total time was ", endTime - startTime)
    return endTime - startTime
  }

  async findAll() {
    const page = +Math.ceil(Math.random())
    return this.db.product.findMany({
      select: { name: true, price: true, picUrl: true },
      take: 25,
      skip: page * 25
    })
    // return this.db.product.findMany({where:{id:"00793668-a7cd-49b0-bbbb-3d35fcb71c3b"}})
    // return this.es.search({
    //   index: "products",
    //   size: 1,
    //   from: 0
    // })
  }




}
