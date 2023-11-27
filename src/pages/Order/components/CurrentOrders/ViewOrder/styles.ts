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

export const Order = styled.div`
  margin-bottom: 2rem;

  strong {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 150%;
    opacity: 0.8;
  }

  h6 {
    margin-top: 0.5rem;
  }
`;

export const Items = styled.div`
  .items-content {
    margin-top: 1rem;
    padding-right: 8px;
    max-height: 400px;
    overflow-y: auto;

    .item {
      display: flex;

      & + .item {
        margin-top: 1rem;
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
        margin-left: 12px;
        margin-right: 4px;
      }

      .status {
        text-transform: uppercase;
        align-self: center;
        margin-left: auto;
        padding-left: 8px;

        font-size: 12px;
        font-weight: 500;
      }

      span {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.gray[400]};
      }

      p {
        font-size: 12px;
        font-weight: 500;
      }
    }
  }

  .total-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
  }
`;
