import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ViewsModule } from './views/views.module';
import { ReviewsModule } from './reviews/reviews.module';
import { PurchasedModule } from './purchased/purchased.module';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { ReqPerSec } from './middlewares/rps.middleware';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProductsModule,
    ViewsModule,
    ReviewsModule,
    PurchasedModule,
    DbModule
  ],

})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(ReqPerSec).forRoutes('*')
//   }

// }
