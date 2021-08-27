import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { Catalog, CatalogModel } from '../models/catalog';

import { CatalogsService } from './catalogs.service';
import { CatalogsController } from './catalogs.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Catalog.name, schema: CatalogModel }]),
  ],
  controllers: [CatalogsController],
  providers: [CatalogsService],
})
export class CatalogsModule {}
