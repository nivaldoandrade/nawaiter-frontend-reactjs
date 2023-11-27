import styled from 'styled-components';

export const Title = styled.small`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 150%;
  opacity: 0.8;
`;

export const Container = styled.div`
  width: 100%;
`;

export const Status = styled.div`
  margin-bottom: 2rem;

  strong {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 150%;
    opacity: 0.8;
  }

  .status-content {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;

    h6 {
      margin-left: 0.5rem;
    }
  }
`;

export const Item = styled.div`
  & > div {
    margin-top: 1rem;
    display: flex;
    align-items: center;
  }

  img {
    align-self: center;
    width: 48px;
    height: 40px;
    border-radius: 0.375rem;
    object-fit: cover;
    object-position: center;
  }

  .quantity {
    min-width: 1.25rem;
    margin-right: 4px;
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  p {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const Observation = styled.div`
  margin-top: 1.5rem;

  h6 {
    padding-top: 0.5rem;
  }
`;
