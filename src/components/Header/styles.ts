import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.81rem 1rem;

  color: ${({ theme }) => theme.colors.gray[0]};

  .details {
    h3 {
      margin-bottom: 0.37rem;
    }

    span {
      line-height: 150%;
      opacity: 0.9;
    }
  }
`;
