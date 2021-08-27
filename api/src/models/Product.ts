import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { FileUploadModel, FileUpload } from './FileUpload';

export type ProductDocs = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  summary: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  old_price: number;

  @Prop({ required: true })
  new_Price: number;

  @Prop({ required: true })
  expiration_date: string;

  @Prop({ required: true })
  geo_location: string;

  @Prop({ type: FileUploadModel, required: true, ref: FileUpload.name })
  image: FileUpload;

  @Prop({ default: Date.now() })
  _created: string;
}

export const ProductModel = SchemaFactory.createForClass(Product);
