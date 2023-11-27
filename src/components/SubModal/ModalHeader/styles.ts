import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 44px;
    height: 44px;
    font-size: 0;
    border: 0;
    background-color: transparent;

    &:disabled {
      cursor: not-allowed;

      svg {
        & > path {
          stroke: ${({ theme }) => theme.colors.gray[200]};
        }
      }
    }
  }
`;
