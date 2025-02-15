import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductElasticSearch } from './repository/products.elasticsearch';
import { ProductRepository } from './repository/products.prisma';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports:[ElasticsearchModule.register({ node: "http:localhost:9200" }),],
  controllers: [ProductsController],
  providers: [ProductsService,ProductElasticSearch,ProductRepository],
})
export class ProductsModule {}
