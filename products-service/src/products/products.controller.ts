import { Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly product: ProductsService) { }


  @Get()
  GetAllProducts() { }

  @Get('s/:id')
  GetSingleProduct(@Param('id') id: string) {

  }

  @Get("search")
  SearchProduct() { }

  @Get("find")
  FindOnMatch(@Query() find:FindType) { 

  }

  @Post()
  CreateProduct(product:CreateProductDto){
    
  }

  @Delete()
  DeleteProduct(@Param('id') id: string){

  }




}



type FindType = {

  name?: string | null
  size?: string | null
  colour?: string | null

  lowerPrice?: number | null
  higherPrice?: number | null

  viewCount: "asc" | "dec" | null
  reviewCount: "asc" | "dec" | null
  purchasedCount: "asc" | "dec" | null

}
