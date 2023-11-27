import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  button {
    background: transparent;
    border: 0;
    padding: 8px;
  }
`;

export const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: #000000;

  span {
    position: relative;
    margin-left: 18px;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -12px;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      background: ${({ theme }) => theme.colors.gray[200]};
      border-radius: 50%;
    }
  }
`;

export const PreviuosMonthButton = styled.button``;

export const NextMonthButton = styled.button`
  svg {
    transform: rotate(180deg);
  }
`;

export const CalendarContainer = styled.table`
  border-collapse: collapse;
  table-layout: fixed;

  thead th {
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    color: #000000;
    text-transform: lowercase;
    padding: 8px;

    &:last-child {
      width: initial;
    }
  }

  tbody {
    text-align: center;
    &::before {
      content: '';
      padding-bottom: 8px;
      display: block;
    }
  }
`;
