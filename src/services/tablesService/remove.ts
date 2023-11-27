import api from '../api';

interface RemoveTableParms {
  id: string;
}

export async function remove({ id }: RemoveTableParms) {
  await api.delete(`/tables/${id}`);
}
