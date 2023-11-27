import api from '../api';

interface ListOrdersParams {
  page?: number;
}

interface Order {
  id: string;
  orderNumber: number;
  tableId: string;
  table: {
    name: string;
  };
  finishedAt: null | string;
  itemsCount: number;
}

interface ListOrdersResponse {
  orders: Order[];
  totalCount: number;
}

export async function list({ page }: ListOrdersParams) {
  const { data } = await api.get<ListOrdersResponse>('orders', {
    params: {
      page,
    },
  });

  return data;
}
