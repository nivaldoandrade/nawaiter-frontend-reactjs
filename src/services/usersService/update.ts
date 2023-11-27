import api from '../api';

interface UpdateUserBody {
  id: string;
  name: string;
  username: string;
  password: string | null;
  role: 'admin' | 'garcom' | 'cozinha';
}

interface UpdateUserResponse extends UpdateUserBody {
  createdAt: string;
  updatedAt: string;
}

export async function update(body: UpdateUserBody) {
  const { id, ...restBody } = body;

  const { data } = await api.put<UpdateUserResponse>(`/users/${id}`, {
    ...restBody,
  });

  return data;
}
