import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ViewsModule } from './views/views.module';
import { ReviewsModule } from './reviews/reviews.module';
import { PurchasedModule } from './purchased/purchased.module';
import { DbModule } from './db/db.module';


@Module({
  imports: [ProductsModule, ViewsModule, ReviewsModule, PurchasedModule, DbModule],

})
export class AppModule {}
