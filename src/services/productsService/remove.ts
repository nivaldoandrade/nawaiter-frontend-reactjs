import api from '../api';

export async function remove(id: string) {
  await api.delete(`/products/${id}`);
}
