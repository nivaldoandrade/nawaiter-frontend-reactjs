import styled, { css } from 'styled-components';

interface ButtonProps {
  isCurrentPage?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 32px;
  height: 32px;
  text-align: center;
  border-radius: 100%;
  border: 0;
  background-color: ${({ theme }) => theme.colors.primary.main};

  ${({ isCurrentPage }) =>
    isCurrentPage &&
    css`
      background-color: ${({ theme }) => theme.colors.primary.dark};
    `}

  color: ${({ theme }) => theme.colors.gray[0]};

  & + button {
    margin-left: 8px;
  }
`;
