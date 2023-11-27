import api from '../api';

export async function create(id: string) {
  await api.post(`completedorders/${id}`);
}
