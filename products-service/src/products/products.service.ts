import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductRepository } from './repository/products.prisma';
import { ProductElasticSearch } from './repository/products.elasticsearch';
import { randomUUID } from 'crypto';
import { FindType } from './dto/find-product.type';



@Injectable()
export class ProductsService {

    constructor(
        private readonly db: ProductRepository,
        private readonly es: ProductElasticSearch
    ) { }

    async createProduct(product: CreateProductDto) {
        const id = randomUUID()
        await Promise.all([
            this.db.createProduct(id, product),
            this.es.createProduct(id, product)
        ])
        return { statuscode: HttpStatus.ACCEPTED, message: "success" }
    }

    async getSingleProduct(id: string) {
        const [_, data] = await Promise.all([
            this.db.updateOneView(id),
            this.db.getOneProduct(id),

        ])
        return data
    }

    async deleteProduct(id: string) {
        // to-do delete from elasctic
        await Promise.all([this.db.deleteOne(id)])
        return { statuscode: HttpStatus.ACCEPTED, message: "success" }
    }

    async findProducts(find:FindType) {
    //    return await this.db.findProducts(find)g
       return await this.db.getProducts()
     }

    async searchProducts() { }

}
