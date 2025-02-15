import { Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FindType } from './dto/find-product.type';

@Controller('products')
export class ProductsController {
  constructor(private readonly product: ProductsService) { }


  @Get()
  GetAllProducts() { }

  @Get('s/:id')
  GetSingleProduct(@Param('id') id: string) {
    return this.product.getSingleProduct(id)
  }

  @Get("search")
  SearchProduct() { }

  @Get("find")
  FindOnMatch(@Query() find: FindType) {
    console.log({find})
    return this.product.findProducts(find)
  }

  @Post()
  CreateProduct(product: CreateProductDto) {
    return this.product.createProduct(product)
  }

  @Delete()
  DeleteProduct(@Param('id') id: string) {
    return this.product.deleteProduct(id)
  }




}




