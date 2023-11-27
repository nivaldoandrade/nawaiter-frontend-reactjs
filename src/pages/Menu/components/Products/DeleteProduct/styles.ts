import styled from 'styled-components';

export const ProductContainer = styled.div`
  width: 100%;
  padding: 0 32px;
`;

export const ProductContent = styled.div`
  display: flex;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 8px;

  img {
    width: 158px;
    object-fit: cover;

    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .details {
    display: flex;
    flex-direction: column;
    margin: 16px;

    span {
      font-weight: 500;

      i {
        display: inline-block;
        width: 24px;
        padding-right: 4px;
      }
    }

    strong {
      padding: 12px 0;
    }
  }
`;
