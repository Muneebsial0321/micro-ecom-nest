import { IsNumber, IsOptional, IsString, Max } from "class-validator"
import { Transform } from "class-transformer"

export class FindType {

    @IsString()
    @IsOptional()
    name?: string | null = null

    @IsString()
    @IsOptional()
    size?: string | null = null

    @IsString()
    @IsOptional()
    colour?: string | null = null

    @IsNumber()
    @Transform(({value}) => (typeof value === "string" ? Number(value) : 0))
    @IsOptional()
    lowerPrice?: number | null = 0

    @IsNumber()
    @Transform(({value}) => (typeof value === "string" ? Number(value) : Infinity))
    @IsOptional()
    higherPrice?: number | null


    @IsString()
    @IsOptional()
    viewCount?: "asc" | "desc" 

    @IsString()
    @IsOptional()
    reviewCount?: "asc" | "desc" 

    @IsString()
    @IsOptional()
    purchasedCount?: "asc" | "desc" 


    @IsNumber()
    @Transform(({value}) => (typeof value === "string" ? Number(value) : 0))
    @IsOptional()
    skip?: number | null = 0

    @IsNumber()
    @Transform(({value}) => (typeof value === "string" ? Number(value) : 25))
    @IsOptional()
    @Max(100)
    take?: number | null = 25

}