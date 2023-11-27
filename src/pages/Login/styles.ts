import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 384px;

  > button {
    margin-top: 40px;
  }
`;

export const Header = styled.header`
  text-align: center;

  p {
    font-weight: 500;
    opacity: 0.9;
    margin-bottom: 4px;
  }

  strong {
    font-size: 32px;
    font-weight: 700;

    span {
      font-weight: 300;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 32px;
  flex-direction: column;
  margin-top: 40px;
`;

export const Error = styled.small`
  display: flex;
  align-items: center;

  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary.main};
  padding-top: 8px;

  i {
    margin-right: 8px;
    font-size: 0;
  }
`;
