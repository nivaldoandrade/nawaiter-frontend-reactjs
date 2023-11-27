import logoImg from '../../assets/images/logo.svg';

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <div className="details">
          <h3>Pedidos</h3>
          <span>Acompanhe os pedidos dos clientes</span>
        </div>

        <img src={logoImg} alt="NAWAITERAPP" />
      </Content>
    </Container>
  );
}
