import { rgba } from 'polished';
import styled from 'styled-components';

export const Container = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: ${({ theme }) => rgba(theme.colors.gray[200], 0.2)};
`;

export const ContentSidebar = styled.div`
  width: 108px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  height: 100%;
  margin-left: 108px;
  padding: 40px 80px 0 36px;
`;
