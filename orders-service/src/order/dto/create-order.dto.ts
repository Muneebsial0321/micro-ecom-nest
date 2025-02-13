import { Type } from "class-transformer"
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator"

export class CreateOrderDto {

    @IsString()
    userId: string

    @IsString()
    userName: string

    @IsString()
    userEmail: string

    @IsString()
    phoneNumber: string

    @IsString()
    address: string

    @IsString()
    streetNum: string

    @IsString()
    houseNum: string

    @IsString()
    city: string

    // @IsString()
    // status: string

    @IsString()
    paymentMethod:  "cod" | "stripe" | "paypal"

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Product)
    products: Product[]

}


class Product {

    @IsString()
    productId: string

    @IsString()
    productName: string

    @IsOptional()
    @IsString()
    size: string

    @IsString()
    picUrl: string

    @IsString()
    @IsString()
    colour: string

    @IsString()
    orderId: string

}
