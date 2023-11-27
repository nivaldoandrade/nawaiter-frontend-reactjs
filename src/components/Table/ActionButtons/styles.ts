import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    background-color: transparent;
  }

  button {
    font-size: 0;
    border: 0;
    background-color: transparent;
    transition: 0.2s ease-in;

    &:disabled {
      cursor: not-allowed;

      svg {
        opacity: 0.8;
      }
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ViewOrEditButton = styled.button`
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const DeleteButton = styled.button`
  color: ${({ theme }) => theme.colors.primary.main};
`;
