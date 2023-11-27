import api from '../api';

interface CreateCategoryParams {
  icon: string;
  name: string;
}

interface CreateCategoryResponse {
  id: string;
  icon: string;
  name: string;
}

export async function create(params: CreateCategoryParams) {
  const { data } = await api.post<CreateCategoryResponse>('categories', params);

  return data;
}
