import { IsString, IsEmail, IsOptional, IsBoolean } from "class-validator"


export class UserUpdateDto  {
    @IsString()
    name: string
    
    @IsString()
    @IsOptional()
    password?: string

    @IsString()
    @IsOptional()
    profilePic?: string
    
    @IsString()
    @IsOptional()
    phoneNumber?: string
}
