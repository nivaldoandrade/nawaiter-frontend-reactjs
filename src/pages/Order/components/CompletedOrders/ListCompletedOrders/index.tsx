import { Dayjs } from 'dayjs';

import { CalendarComp } from '../../../../../components/Calendar';
import { SortDateIcon } from '../../../../../components/Icons/SortDateIcon';
import { ActionButtons } from '../../../../../components/Table/ActionButtons';
import { Table } from '../../../../../components/Table/Table';
import { Thead } from '../../../../../components/Table/Thead';
import { CompletedOrder } from '../../../../../types/CompletedOrder';

import { SkeletonCompletedOrdersList } from './SkeletonCompletedOrdersList';
import { CalendarContainer, ThContent } from './styles';
import { useListCompletedOrders } from './useListCompletedOrders';

interface ListCompletedOrdersProps {
  isLoading: boolean;
  completedOrders: CompletedOrder[];
  onOpenViewModal: (completedOrder: CompletedOrder) => void;
  onOpenDeleteModal: (completedOder: CompletedOrder) => void;
  onUpdateAndFilterWithNewDates: ([start, end]: Array<Dayjs | null>) => void;
  isEmptyWithDate: boolean;
}

export function ListCompletedOrders({
  isLoading,
  completedOrders,
  onOpenViewModal,
  onOpenDeleteModal,
  onUpdateAndFilterWithNewDates,
  isEmptyWithDate,
}: ListCompletedOrdersProps) {
  const {
    calendarButtonRef,
    handleToggleCalendar,
    isVisibleCalendar,
    containerRef,
    handleSelectedDates,
    selectedDates,
  } = useListCompletedOrders({ onUpdateAndFilterWithNewDates });

  return (
    <Table>
      <Thead>
        <th style={{ width: '96px' }}>Ordem</th>
        <th>
          <ThContent>
            Data
            <button
              aria-label="Icon sort date"
              type="button"
              ref={calendarButtonRef}
              onClick={handleToggleCalendar}
              title="Open calendar"
            >
              <SortDateIcon />
            </button>
            {isVisibleCalendar && (
              <CalendarContainer ref={containerRef}>
                <CalendarComp
                  onSelectedDates={handleSelectedDates}
                  startDate={selectedDates.startDate}
                  endDate={selectedDates.endDate}
                />
              </CalendarContainer>
            )}
          </ThContent>
        </th>
        <th>Mesa</th>
        <th>Total</th>
        <th>Ações</th>
      </Thead>

      <tbody>
        {isLoading ? (
          <SkeletonCompletedOrdersList />
        ) : (
          <>
            {isEmptyWithDate ? (
              <tr>
                <td colSpan={5} align="center">
                  <h6>Nenhum registro de pedido encontrado.</h6>
                </td>
              </tr>
            ) : (
              <>
                {completedOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.orderNumber}</td>
                    <td>{order.createdAtFormatted}</td>
                    <td>{order.table}</td>
                    <td>{order.totalOrderPriceFormatted}</td>
                    <td aria-label="Action buttons">
                      <ActionButtons
                        onView={() => onOpenViewModal(order)}
                        onDelete={() => onOpenDeleteModal(order)}
                      />
                    </td>
                  </tr>
                ))}
              </>
            )}
          </>
        )}
      </tbody>
    </Table>
  );
}
