import { useAuth } from '../../hooks/useAuth';
import { HomeIcon } from '../Icons/HomeIcon';
import { LogOffIcon } from '../Icons/LogOffIcon';
import { MenuIcon } from '../Icons/MenuIcon';
import { OrderIcon } from '../Icons/OrderIcon';
import { UserIcon } from '../Icons/UserIcon';

import { NavLink } from './NavLink';
import { Container, Logo, NavSection } from './styles';

export function Sidebar() {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Logo>
        <strong>NA</strong>
        <span>WAITER</span>
      </Logo>
      <NavSection>
        <NavLink to="/" icon={HomeIcon} title="Home" />
        {user?.role === 'admin' && (
          <>
            <NavLink to="order" icon={OrderIcon} title="Pedido" />
            <NavLink to="cardapio" icon={MenuIcon} title="Cardápio" />
            <NavLink to="users" icon={UserIcon} title="Usuário" />
          </>
        )}
      </NavSection>
      <NavSection className="nav-section-footer">
        <NavLink to="/login" onClick={signOut} icon={LogOffIcon} title="Sair" />
      </NavSection>
    </Container>
  );
}
