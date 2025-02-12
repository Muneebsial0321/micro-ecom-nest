import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ViewsModule } from './views/views.module';
import { ReviewsModule } from './reviews/reviews.module';
import { PurchasedModule } from './purchased/purchased.module';


@Module({
  imports: [ProductsModule, ViewsModule, ReviewsModule, PurchasedModule],

})
export class AppModule {}
