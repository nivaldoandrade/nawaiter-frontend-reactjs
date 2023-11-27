import api from '../api';

interface UpdateOrderItemParams {
  id: string;
  newStatus: string;
}

export async function update({ id, newStatus }: UpdateOrderItemParams) {
  await api.patch(`orderitems/${id}/${newStatus}`);
}
