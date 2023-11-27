import api from '../api';

interface Category {
  id: string;
  icon: string;
  name: string;
}

interface ListProductParams {
  page?: number;
}

export interface ListProductResponse {
  products: {
    id: string;
    name: string;
    description: string;
    imagePath: string;
    price: number;
    category: Category;
    ingredients: {
      icon: string;
      name: string;
    }[];
  }[];
  totalCount: number;
}

export async function list({ page }: ListProductParams) {
  const { data } = await api.get<ListProductResponse>('/products', {
    params: {
      page,
    },
  });

  return data;
}
