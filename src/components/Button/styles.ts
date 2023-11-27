import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 44px;
  padding: 14px 28px;

  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[0]};

  transition: 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
