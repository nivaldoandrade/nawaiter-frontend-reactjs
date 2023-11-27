import { rgba } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.gray[400]};
    }

    button {
      border: 0;
      background-color: transparent;

      font-size: 14px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary.main};

      transition: 0.2s ease-in;

      &:hover {
        color: ${({ theme }) => theme.colors.primary.dark};
      }
    }
  }
`;

export const ListIngredients = styled.ul`
  margin-top: 24px;
  max-height: 476px;
  overflow-y: auto;
`;

export const Ingredient = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
  border: 1px solid ${({ theme }) => rgba(theme.colors.gray[200], 0.3)};
  border-radius: 8px;

  & + li {
    margin-top: 4px;
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  button {
    border: 0;
    background-color: transparent;
  }
`;
