
import {IsArray, IsNumber, IsOptional, IsString} from 'class-validator'
export class CreateProductDto {

    @IsString()
    name: string
    
    @IsString()
    desc: string
    
    @IsArray()
    @IsOptional()
    size: string[]
    
    @IsArray()
    @IsOptional()
    colours: string[]
    
    @IsArray()
    @IsOptional()
    tags: string[]
    
    @IsArray()
    @IsOptional()
    picUrl: string[]
    
    @IsNumber()
    price: number
}
