import api from '../api';

interface CreateProductParams {
  name: string;
  description?: string;
  price: string;
  ingredients: string;
  category: string;
  imagePath: File | string;
}

interface CreateProductResponse {
  id: string;
  name: string;
  imagePath: string;
  price: number;
  category: {
    id: string;
    icon: string;
    name: string;
  };
}

export async function create(params: CreateProductParams) {
  const { data } = await api.post<CreateProductResponse>('/products', params, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return data;
}
