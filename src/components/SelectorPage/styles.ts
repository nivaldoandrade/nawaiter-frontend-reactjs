import { rgba } from 'polished';
import styled, { css } from 'styled-components';

interface ButtonProps {
  selected?: boolean;
}

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 72px 0 32px 0;
`;

export const HeaderContent = styled.div`
  border-bottom: 1px solid ${({ theme }) => rgba(theme.colors.gray[200], 0.4)};
  margin-bottom: 32px;
`;

export const Button = styled.button<ButtonProps>`
  padding: 16px 40px;
  background-color: transparent;
  border: 0;
  border-radius: 8px 8px 0px 0px;

  font-size: 14px;

  color: ${({ theme }) => theme.colors.gray[400]};

  transition: 0.1s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ selected }) =>
    selected &&
    css`
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary.main};
      background-color: ${({ theme }) => theme.colors.gray[0]};
    `}
`;
