import api from '../api';

interface ListCategoryParams {
  page?: number;
  limit?: number;
}

interface ListCategoryResponse {
  categories: Array<{
    id: string;
    icon: string;
    name: string;
  }>;
  totalCount: number;
}

export async function list({ page, limit }: ListCategoryParams) {
  const { data } = await api.get<ListCategoryResponse>('/categories', {
    params: {
      page,
      limit,
    },
  });

  return data;
}
