import { ActionButtons } from '../../../../../components/Table/ActionButtons';
import { Table } from '../../../../../components/Table/Table';
import { Thead } from '../../../../../components/Table/Thead';
import { OrderList } from '../../../../../types/Order';

import { SkeletonOrdersList } from './SkeletonOrdersList';

interface ListOrdersProps {
  orders: OrderList[];
  isLoading: boolean;
  onOpenViewModal: (order: OrderList) => void;
}

export function ListOrders({
  orders,
  isLoading,
  onOpenViewModal,
}: ListOrdersProps) {
  return (
    <Table>
      <Thead>
        <th style={{ width: '96px' }}>Ordem</th>
        <th>Mesa</th>
        <th>Total de Itens</th>
        <th>Ações</th>
      </Thead>
      <tbody>
        {isLoading ? (
          <SkeletonOrdersList />
        ) : (
          orders.map((order) => (
            <tr key={order.id}>
              <td>{order.orderNumber}</td>
              <td>{order.table.name}</td>
              <td>{order.itemsCount}</td>
              <td>
                <ActionButtons
                  onView={() => onOpenViewModal(order)}
                  onDelete={() => ''}
                />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}
