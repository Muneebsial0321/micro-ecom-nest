import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ViewsModule } from './views/views.module';


@Module({
  imports: [ProductsModule, ViewsModule],

})
export class AppModule {}
