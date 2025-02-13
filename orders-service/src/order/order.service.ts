import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { DbService } from 'src/db/db.service';


@Injectable()
export class OrderService {

  constructor(
    private readonly db: DbService
  ) { }

  create(order: CreateOrderDto) {
    let products = order.products
    products.map((e)=>({
      ...e,
      price:PriceCalculator(e.productId)
    }))

    const payload = {...order,totalPrice:100}

    return this.db.order.create({ data: payload });
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}



const PriceCalculator = async (productId: string) => {
  console.log(productId)
  const req = await fetch(`${productId}`)
  // const {}: Promise<{price:number}> = await req.json()
  return 0
 }