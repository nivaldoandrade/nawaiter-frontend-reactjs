import styled from 'styled-components';

export const ThContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  > button {
    background: transparent;
    border: 0;
    padding-left: 8px;

    font-size: 0;
  }
`;

export const CalendarContainer = styled.div`
  z-index: 9;
  position: absolute;
  top: 34px;
  left: 0;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 42px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid ${({ theme }) => theme.colors.background};
  }
`;
