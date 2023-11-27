import api from '../api';

interface CreateUserBody {
  name: string;
  username: string;
  password: string;
  role: 'admin' | 'garcom' | 'cozinha';
}

interface CreateUserResponse extends CreateUserBody {
  createdAt: string;
  updatedAt: string;
}

export async function create(body: CreateUserBody) {
  const { data } = await api.post<CreateUserResponse>('/users', body);

  return data;
}
