import api from '../api';

interface DeleteUserParams {
  id: string;
}

export async function remove({ id }: DeleteUserParams) {
  await api.delete(`users/${id}`);
}
