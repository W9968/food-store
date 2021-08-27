import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatalogDocs = Catalog & Document;

@Schema()
export class Catalog {
  @Prop({ required: true })
  category: string;
}

export const CatalogModel = SchemaFactory.createForClass(Catalog);
