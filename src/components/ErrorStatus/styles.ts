import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    & > path {
      fill: ${({ theme }) => theme.colors.primary.main};
    }
  }

  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 24px;

    strong {
      font-size: 22px;
      margin-bottom: 8px;
    }
  }
`;
