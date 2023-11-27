import 'react-loading-skeleton/dist/skeleton.css';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '../../Sidebar';

import { Container, Content, ContentSidebar } from './styles';

export function LayoutAdmin() {
  return (
    <Container>
      <ContentSidebar>
        <Sidebar />
      </ContentSidebar>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
}
