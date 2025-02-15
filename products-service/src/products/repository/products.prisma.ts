import { Injectable } from "@nestjs/common";
import { DbService } from "src/db/db.service";
import { CreateProductDto } from "../dto/create-product.dto";

@Injectable()
export class ProductRepository {

    constructor(private readonly db: DbService) { }

    async createProduct(id: string, product: CreateProductDto) {
        return await this.db.product.create({ data: { ...product, id } })
    }

    async updateOneView(id: string) {
        return await this.db.product.update({ where: { id }, data: { viewCount: { increment: 1 } } })
    }

    async updateOnePurchase(id: string) {
        return await this.db.product.update({ where: { id }, data: { purchasedCount: { increment: 1 } } })
    }

    async deleteOne(id: string) {
        return await this.db.product.delete({ where: { id } })
    }
}