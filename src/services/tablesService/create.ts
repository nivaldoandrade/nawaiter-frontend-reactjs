import api from '../api';

interface CreateTableBody {
  name: string;
  username: string;
  password: string;
}

interface CreateTableResponse {
  id: string;
  name: string;
  username: string;
  password: string;
}

export async function create(body: CreateTableBody) {
  const { data } = await api.post<CreateTableResponse>('/tables', body);

  return data;
}
