import api from '../api';

interface ListCompletedOrderParams {
  page?: number;
  dateStart?: string | null;
  dateEnd?: string;
}

interface ListCompletedOrdersResponse {
  completedOrders: Array<{
    id: string;
    orderNumber: number;
    date: string;
    table: string;
    totalPrice: number;
  }>;
  totalCount: number;
}

export async function list({
  page,
  dateStart,
  dateEnd,
}: ListCompletedOrderParams) {
  const { data } = await api.get<ListCompletedOrdersResponse>(
    'completedorders',
    {
      params: {
        page,
        dateStart,
        dateEnd,
      },
    },
  );

  return data;
}
