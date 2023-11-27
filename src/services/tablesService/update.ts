import api from '../api';

interface UpdateTableBody {
  id: string;
  name: string;
  username: string;
  password: string | null;
}

interface UpdateTableResponse {
  id: string;
  name: string;
  username: string;
}

export async function update(body: UpdateTableBody) {
  const { id, ...restBody } = body;

  const { data } = await api.put<UpdateTableResponse>(`/tables/${id}`, {
    ...restBody,
  });

  return data;
}
