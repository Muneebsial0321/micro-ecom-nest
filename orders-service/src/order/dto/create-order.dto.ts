import { IsNumber, IsOptional, IsString } from "class-validator"

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

    @IsNumber()
    totalPrice: number

    @IsString()
    status: string

    @IsString()
    paymentMethod: string

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
