import { Injectable } from "@nestjs/common";
import { ElasticsearchService } from "@nestjs/elasticsearch";
import { CreateProductDto } from "../dto/create-product.dto";

@Injectable()
export class ProductElasticSearch {


    constructor(private readonly es: ElasticsearchService) { }

    async createProduct(id: string, product: CreateProductDto) {
        return await this.es.create({
            index: "products",
            id: id,
            document: { id, ...product }
        })
    }

    async updateOneView(id: string) {
    }

    async updateOnePurchase(id: string) {
    }

    async deleteOne(id: string) {
    }
}