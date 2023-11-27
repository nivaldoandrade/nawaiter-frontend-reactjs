import styled from 'styled-components';

export const Board = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;

    strong {
      font-size: 0.875rem;
      line-height: 150%;
      margin: 0 0.5rem;
    }

    span {
      font-size: 0.875rem;
      line-height: 150%;
    }
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    button {
      width: 100%;
      height: 100%;
      min-height: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2.5rem;
      background-color: ${({ theme }) => theme.colors.gray[0]};
      border: 1px solid rgba(204, 204, 204, 0.4);
      border-radius: 1rem;

      & + button {
        margin-top: 1.5rem;
      }

      strong {
        flex: 1;
        font-weight: 500;
        line-height: 120%;
      }

      span {
        font-size: 20px;
        line-height: 150%;
        color: ${({ theme }) => theme.colors.gray[400]};
      }

      p {
        font-size: 14px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.gray[500]};
      }
    }
  }
`;
