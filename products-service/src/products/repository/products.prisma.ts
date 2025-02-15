import { Injectable } from "@nestjs/common";
import { DbService } from "src/db/db.service";
import { CreateProductDto } from "../dto/create-product.dto";
import { FindType } from "../dto/find-product.type";

@Injectable()
export class ProductRepository {

    constructor(private readonly db: DbService) { }

    async createProduct(id: string, product: CreateProductDto) {
        return await this.db.product.create({ data: { ...product, id } })
    }
    async getOneProduct(id: string) {
        return await this.db.product.findUnique({ where: { id } })
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

    async findProducts(find: FindType) {
        return await this.db.product.findMany({
            // Select
            select: {
                id: true,
                name: true,
                picUrl: true,
                price: true,
                viewCount: true,
                purchasedCount: true
            },

            // search
            where: {
                ...(find.name ? { name: find.name } : {}),
                ...(find.colour ? { colours: { has: find.colour } } : {}),
                ...(find.size ? { size: { has: find.size } } : {}),
                ...(find.lowerPrice ? { price: { lte: find.lowerPrice } } : {}),
                ...(find.higherPrice ? { price: { gte: find.higherPrice } } : {}),
            },

            // pagination
            ...(find.take ? { take: +find.take } : { take: 25 }),
            ...(find.skip ? { skip: +find.skip } : {}),

            // order
            ...(find.viewCount ? { orderBy: { viewCount: find.viewCount } } : {}),
            ...(find.purchasedCount ? { orderBy: { purchasedCount: find.purchasedCount } } : {}),
            ...(find.reviewCount ? { orderBy: { ReviewCount: find.reviewCount } } : {}),

        })

    }
}