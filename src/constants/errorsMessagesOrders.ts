const errorMessagesOrders = {
  'The order is still WAITING': 'O pedido ainda está na fila de espera',
  'The order is already IN_PRODUCTION': 'O pedido já está em produção',
  'The order was DELIVERED_TO_TABLE': 'O pedido foi concluído',
  'The order is already DONE': 'O pedido já está pronto',
  'The order is already in WAITING or IN_PRODUCTION and it is not possible to change the DELIVERED_TO_TABLE status':
    'O pedido está com status fila de espera ou em produção e não é possível alterar para concluído',
  'The order is already DELIVERED_TO_TABLE': 'O pedido já está concluído',
  'The order has already been CANCELLED': 'O pedido já foi cancelado',
} as { [key: string]: string };

export default errorMessagesOrders;
