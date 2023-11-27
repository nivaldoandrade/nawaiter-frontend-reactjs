import { rgba } from 'polished';
import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border: 1px solid ${({ theme }) => rgba(theme.colors.gray[200], 0.4)};
  border-radius: 8px;
  border-spacing: 0;

  > tbody {
    img {
      width: 48px;
      height: 32px;
      border-radius: 4px;
    }

    tr:last-child > td {
      border-bottom: none;
    }

    td {
      padding: 16px;
      border-bottom: 1px solid
        ${({ theme }) => rgba(theme.colors.gray[200], 0.4)};
    }
  }
`;
