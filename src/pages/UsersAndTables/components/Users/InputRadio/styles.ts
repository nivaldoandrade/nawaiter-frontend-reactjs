import styled from 'styled-components';

interface ContainerProps {
  error: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[400]};

  & + label {
    margin-top: 32px;
  }

  .input-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    small {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  .input-group {
    display: flex;
    margin-top: 16px;

    label {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;

      & + label {
        margin-left: 32px;
      }

      input[type='radio'] {
        cursor: pointer;
        width: 18px;
        height: 18px;

        &:checked,
        &:hover {
          appearance: none;
          -webkit-appearance: none;
          border-radius: 50%;
          background: ${({ theme }) => theme.colors.primary.main};
          border: 3px solid ${({ theme }) => theme.colors.background};
          outline: 2px solid ${({ theme }) => theme.colors.primary.main};
        }
      }
    }
  }
`;
