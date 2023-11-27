import { Ingredient } from '../../types/Product';
import api from '../api';

interface ShowProductResponse {
  id: string;
  name: string;
  description?: string;
  imagePath: string;
  price: number;
  category: {
    id: string;
    icon: string;
    name: string;
  };
  ingredients: Ingredient[];
}

export async function show(id: string) {
  const { data } = await api.get<ShowProductResponse>(`/products/${id}`);

  return data;
}
