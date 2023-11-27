import { MenuIcon } from '../../components/Icons/MenuIcon';
import { SelectorPage } from '../../components/SelectorPage';

import { Categories } from './components/Categories';
import { Products } from './components/Products';

export function Menu() {
  const options = new Map<string, React.ReactNode>();

  options.set('Produtos', <Products />);
  options.set('Categorias', <Categories />);

  return (
    <SelectorPage
      optionMap={options}
      icon={MenuIcon}
      title="Cardápio"
      subtitle="Gerencie os produtos do seu estabelecimento"
    />
  );
}
