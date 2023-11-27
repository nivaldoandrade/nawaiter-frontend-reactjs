import { OrderIcon } from '../../components/Icons/OrderIcon';
import { SelectorPage } from '../../components/SelectorPage';

import { CompletedOrders } from './components/CompletedOrders';
import { CurrentOrders } from './components/CurrentOrders';

export function Order() {
  const options = new Map<string, React.ReactNode>();

  options.set('Pedidos em Execução', <CurrentOrders />);
  options.set('Histórico de Pedidos', <CompletedOrders />);

  return (
    <SelectorPage
      optionMap={options}
      icon={OrderIcon}
      title="Pedidos"
      subtitle="Gerencie os pedidos"
    />
  );
}
