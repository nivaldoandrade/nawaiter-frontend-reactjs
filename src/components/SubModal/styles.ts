import styled, { css } from 'styled-components';

interface FooterProps {
  hasLeftButton: boolean;
}

export const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  width: 100%;
  max-width: 480px;
  max-height: 90%;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  border-radius: 8px;
  padding: 32px;
`;

export const Main = styled.div`
  margin: 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Question = styled.h6`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-bottom: 24px;
`;

export const Footer = styled.div<FooterProps>`
  display: flex;
  justify-content: flex-end;

  ${({ hasLeftButton }) =>
    hasLeftButton &&
    css`
      justify-content: space-between;

      button:nth-child(2) {
        flex: 1;
      }
    `}
  button:nth-child(2) {
    max-width: 191px;
  }

  button.btn-left {
    margin-right: 56px;
    background-color: transparent;
    border: 0;
    font-weight: 600;
    padding: 14px 0;
    color: ${({ theme }) => theme.colors.primary.main};

    transition: 0.2s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark};
    }

    &:disabled {
      cursor: not-allowed;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;
