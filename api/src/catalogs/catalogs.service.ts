import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Catalog, CatalogDocs } from '../models/catalog';
import { CreateCatalogDto } from './dto/create-catalog.dto';
import { UpdateCatalogDto } from './dto/update-catalog.dto';

@Injectable()
export class CatalogsService {
  constructor(
    @InjectModel(Catalog.name)
    private readonly catalogModel: Model<CatalogDocs>,
  ) {}

  async create(createCatalogDto: CreateCatalogDto): Promise<Catalog> {
    const catalog = await new this.catalogModel(createCatalogDto);
    return catalog.save();
  }

  async findAll(): Promise<Catalog[]> {
    return await this.catalogModel.find().lean();
  }

  async findOne(id: string): Promise<Catalog> {
    return await this.catalogModel.findById(id).exec();
  }

  async update(
    id: string,
    updateCatalogDto: UpdateCatalogDto,
  ): Promise<string> {
    const catalogToUpdate = await this.catalogModel.findById(id);
    if (catalogToUpdate === null) {
      return 'category do not exist';
    } else {
      catalogToUpdate.updateOne(updateCatalogDto).exec();
      return 'category updated successfully';
    }
  }

  async remove(id: string): Promise<string> {
    const categoryToDelete = await this.catalogModel.findById(id);
    if (categoryToDelete === null) {
      return 'category do not exist';
    } else {
      await categoryToDelete.remove();
      return 'category deleted';
    }
  }
}
