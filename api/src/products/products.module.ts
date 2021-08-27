import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductModel } from '../models/Product';

import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductModel }]),
  ],
})
export class ProductsModule {}
