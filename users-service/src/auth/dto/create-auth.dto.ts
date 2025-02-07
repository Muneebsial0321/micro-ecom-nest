import { IsBoolean, IsEmail, IsOptional, IsString } from "class-validator"

export class UserCreateDto {
    @IsString()
    name: string
    
    @IsEmail()
    email: string

    @IsString()
    @IsOptional()
    password?: string

    @IsString()
    @IsOptional()
    provider?: string

    @IsString()
    @IsOptional()
    profilePic?: string

    @IsString()
    @IsOptional()
    phoneNumber?: string
}
