import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductRepository } from './repository/products.prisma';
import { ProductElasticSearch } from './repository/products.elasticsearch';
import { randomUUID } from 'crypto';



@Injectable()
export class ProductsService {

    constructor(
        private readonly db:ProductRepository,
        private readonly es:ProductElasticSearch
    ){}

   async createProduct(product:CreateProductDto){
    const id =randomUUID()
        await Promise.all([
            this.db.createProduct(id,product),
            this.es.createProduct(id,product)
        ])
    }

}
