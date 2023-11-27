import api from '../api';

interface ItemResponse {
  itemId: string;
  productId: string;
  name: string;
  quantity: number;
  price: number;
  observation: string | null;
}

interface ShowCompletedOrdersResponse {
  id: string;
  orderNumber: number;
  table: string;
  date: string;
  items: ItemResponse[];
  totalPrice: number;
}

export async function show(id: string) {
  const { data } = await api.get<ShowCompletedOrdersResponse>(
    `completedorders/${id}`,
  );

  return data;
}
