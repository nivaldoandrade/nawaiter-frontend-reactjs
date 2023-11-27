import { UserIcon } from '../../components/Icons/UserIcon';
import { SelectorPage } from '../../components/SelectorPage';

import { Tables } from './components/Tables';
import { Users } from './components/Users';

export function UsersAndTables() {
  const options = new Map<string, React.ReactNode>();

  options.set('Usuários', <Users />);
  options.set('Mesas', <Tables />);

  return (
    <SelectorPage
      optionMap={options}
      icon={UserIcon}
      title="Usuários"
      subtitle="Cadastre e gerencie usuários e mesas"
    />
  );
}
