import styled from 'styled-components';

interface FormFooterProps {
  isProduct: boolean;
}

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  max-width: 928px;
  width: 100%;
  height: calc(100vh - 32px);
  overflow-y: auto;
  padding: 32px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: column;

  > form {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 32px;
    margin-top: 48px;
    flex: 1;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FormFooter = styled.footer<FormFooterProps>`
  grid-column: span 2;
  width: 100%;

  margin-top: auto;
  padding-top: 48px;
  display: flex;
  align-items: center;
  justify-content: ${({ isProduct }) =>
    isProduct ? 'space-between' : 'flex-end'};

  button {
    max-width: 191px;
  }

  button.btn-delete {
    text-align: left;
    background-color: transparent;
    border: 0;
    font-weight: 600;
    padding: 14px 0;
    color: ${({ theme }) => theme.colors.primary.main};

    transition: 0.2s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;
