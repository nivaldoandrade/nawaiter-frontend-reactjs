export interface OrderList {
  id: string;
  orderNumber: number;
  tableId: string;
  table: {
    name: string;
  };
  finishedAt: null | string;
  itemsCount: number;
}

interface Item {
  id: string;
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE' | 'CANCELLED';
  statusFormatted: string;
  quantity: number;
  totalPrice: number;
  priceFormatted: string;
  observation: string | null;
  srcImg: string;
  product: {
    id: string;
    name: string;
    price: number;
    imagePath: string;
  };
}

export interface Order {
  id: string;
  orderNumber: number;
  tableId: string;
  table: {
    name: string;
  };
  finishedAt: null | string;
  items: Item[];
  totalPriceOrder: number;
  totalPriceOrderFormatted: string;
}
