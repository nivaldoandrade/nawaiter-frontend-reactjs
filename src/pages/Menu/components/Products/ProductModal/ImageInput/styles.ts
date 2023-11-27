import styled from 'styled-components';

export const Image = styled.div`
  /* margin-bottom: 32px; */

  .image-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.gray[400]};
    }
  }

  .image-content {
    display: flex;
    flex-direction: column;
    width: 100%;

    margin-top: 16px;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    border-radius: 8px;

    img {
      width: 100%;
      height: 160px;
      object-fit: cover;
      object-position: center;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    .image-upload {
      width: 100%;
      height: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.colors.gray[100]};
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      > svg {
        align-self: center;
      }
    }

    input[type='file'] {
      display: none;
    }

    label {
      padding: 30px 14px;

      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      color: ${({ theme }) => theme.colors.primary.main};

      transition: 0.2s ease-in;
      &:hover {
        color: ${({ theme }) => theme.colors.primary.dark};
      }

      h6 {
        margin-left: 8px;
      }
    }
  }
`;
