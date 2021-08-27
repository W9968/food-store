import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FileUploadDocs = FileUpload & Document;

@Schema()
export class FileUpload {
  @Prop({ required: true })
  file_name: string;
}

export const FileUploadModel = SchemaFactory.createForClass(FileUpload);
