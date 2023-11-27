import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 10px 0px 32px rgba(204, 204, 204, 0.1);
  padding: 40px 0 0;
`;

export const Logo = styled.a`
  padding-bottom: 45px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[400]};

  strong {
    font-size: 24px;
  }

  span {
    display: block;
    font-weight: 300;
    font-size: 20px;
    margin-top: -4px;
  }
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;

  &.nav-section-footer {
    margin-top: auto;
    padding-top: 45px;
  }
`;
