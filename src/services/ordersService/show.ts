import api from '../api';

interface Item {
  id: string;
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE' | 'CANCELLED';
  quantity: number;
  totalPrice: number;
  observation: string | null;
  product: {
    id: string;
    name: string;
    price: number;
    imagePath: string;
  };
}

interface ShowOrderResponse {
  id: string;
  orderNumber: number;
  tableId: string;
  table: {
    name: string;
  };
  finishedAt: null | string;
  items: Item[];
}

export async function show(id: string) {
  const { data } = await api.get<ShowOrderResponse>(`orders/${id}`);

  return data;
}
