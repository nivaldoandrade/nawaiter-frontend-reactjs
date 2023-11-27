/* eslint-disable prettier/prettier */
import api from '../api';

interface ItemResponse {
  id: string;
  status:
    | 'WAITING'
    | 'IN_PRODUCTION'
    | 'DONE'
    | 'DELIVERED_TO_TABLE'
    | 'CANCELLED';
  quantity: number;
  table: string;
  product: {
    id: string;
    name: string;
  };
  observation: string | null;
}

interface ListOrderItemsResponse {
  WAITING: ItemResponse[];
  IN_PRODUCTION: ItemResponse[];
  DONE: ItemResponse[];
  DELIVERED_TO_TABLE: ItemResponse[];
  CANCELLED: ItemResponse[];
}

export async function list() {
  const { data } = await api.get<ListOrderItemsResponse>('orderitems');

  return data;
}
