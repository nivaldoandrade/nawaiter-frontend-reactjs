import { ICategory } from './Category';

export interface Ingredient {
  name: string;
  icon: string;
}

export interface IProductSubmit {
  id?: string;
  name: string;
  description?: string;
  price: string;
  imagePath: File | string;
  ingredients?: Ingredient[];
  category: string;
}

export interface IProduct {
  id: string;
  name: string;
  description?: string;
  imagePath: string;
  srcImg: string;
  price: number;
  priceFormatted: string;
  ingredients: Ingredient[];
  category: ICategory;
}
