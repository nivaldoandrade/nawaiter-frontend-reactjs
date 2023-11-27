export interface OrderItemDetails {
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

export interface OrderItemStatus {
  WAITING: OrderItemDetails[];
  IN_PRODUCTION: OrderItemDetails[];
  DONE: OrderItemDetails[];
  DELIVERED_TO_TABLE: OrderItemDetails[];
  CANCELLED: OrderItemDetails[];
}
