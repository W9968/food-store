import { IProduct } from './../../interfaces/Product';

export class CreateProductDto extends IProduct {
  name: string;
  summary: string;
  description: string;
  old_price: number;
  new_Price: number;
  expiration_date: string;
  geo_location: string;
  _created: Date;
}
