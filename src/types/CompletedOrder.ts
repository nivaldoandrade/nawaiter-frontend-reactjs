export interface CompletedOrder {
  id: string;
  orderNumber: number;
  date: string;
  createdAtFormatted: string;
  table: string;
  totalPrice: number;
  totalOrderPriceFormatted: string;
}

interface CompletedOrderItem {
  itemId: string;
  productId: string;
  name: string;
  quantity: number;
  price: number;
  observation: string | null;
  priceFormatted: string;
}

export interface CompletedOrderDetails extends CompletedOrder {
  items: CompletedOrderItem[];
}
