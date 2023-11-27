import { HeaderPage } from '../../components/HeaderPage';
import { HomeIcon } from '../../components/Icons/HomeIcon';
import { Loader } from '../../components/Loader';
import { useListOrderItems } from '../../hooks/useListOrderitems';

import { Orders } from './OrderItems';
import { Container, ContentOrders } from './styles';

export function Home() {
  const { orderItems, isLoading, refetch, isFetching } = useListOrderItems();

  return (
    <Container>
      <HeaderPage
        icon={HomeIcon}
        title="Home"
        subtitle="Acompanhe os pedidos dos clientes"
        isLoading={isFetching}
      />
      <ContentOrders>
        {isLoading ? (
          <Loader />
        ) : (
          <Orders orderItems={orderItems} refetch={refetch} />
        )}
      </ContentOrders>
    </Container>
  );
}
