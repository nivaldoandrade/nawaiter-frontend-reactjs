import api from '../api';

interface UpdateProductParams {
  id: string;
  name: string;
  description?: string;
  price: string;
  ingredients?: string;
  category: string;
  imagePath: File | string;
}

interface UpdateProductResponse {
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

export async function update(params: UpdateProductParams) {
  const { id, ...rest } = params;
  const { data } = await api.put<UpdateProductResponse>(
    `/products/${id}`,
    { ...rest },
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    },
  );

  return data;
}
