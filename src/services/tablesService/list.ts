import api from '../api';

interface ListTableResponse {
  tables: {
    id: string;
    name: string;
    username: string;
  }[];
  totalCount: number;
}

interface ListTableParams {
  page?: number;
}

export async function list({ page }: ListTableParams) {
  const { data } = await api.get<ListTableResponse>('/tables', {
    params: {
      page,
    },
  });

  return data;
}
