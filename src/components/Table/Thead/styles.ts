import { rgba } from 'polished';
import styled from 'styled-components';

export const TheadStyled = styled.thead`
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  background-color: ${({ theme }) => rgba(theme.colors.gray[200], 0.2)};

  th {
    padding: 16px;

    &:first-child {
      border-top-left-radius: 8px;
    }
    &:last-child {
      border-top-right-radius: 8px;
    }
  }

  /* th:first-child {
		width: 96px;
	} */

  th:last-child {
    width: 96px;
  }
`;
