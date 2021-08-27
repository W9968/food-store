import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { CatalogsModule } from './catalogs/catalogs.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:XqNEmcIHOK7fEqvw@kouletwakel.fq7k2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    CatalogsModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
