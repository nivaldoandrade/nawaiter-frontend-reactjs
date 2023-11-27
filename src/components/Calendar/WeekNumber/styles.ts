/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

interface TdProps {
  isDateinRange: boolean;
  isSeletectFirstAndLastDate: boolean;
  isFirstSelectedDate: boolean;
  isLastSeletectedDate: boolean;
  isCurrentDate: boolean;
}

export const Td = styled.td<TdProps>`
  ${({ isDateinRange }) =>
    isDateinRange &&
    css`
      background: rgba(255, 171, 173, 0.3);
    `}

  ${({ isSeletectFirstAndLastDate }) =>
    isSeletectFirstAndLastDate &&
    css`
      background: linear-gradient(
        to left,
        rgba(255, 171, 173, 0.3) 50%,
        transparent 50%
      );
    `}

	${({ isLastSeletectedDate }) =>
    isLastSeletectedDate &&
    css`
      background: linear-gradient(
        to right,
        rgba(255, 171, 173, 0.3) 50%,
        transparent 50%
      );
    `}

	button {
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 40px;
    background: transparent;

    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[300]};

    ${({ isFirstSelectedDate, isLastSeletectedDate, isDateinRange }) =>
      !(isFirstSelectedDate || isLastSeletectedDate || isDateinRange) &&
      css`
        &:hover {
          background: rgb(255, 171, 173);
          font-weight: 600;
          color: ${({ theme }) => theme.colors.primary.main};
        }
      `}

    ${({ isCurrentDate }) =>
      isCurrentDate &&
      css`
        font-weight: 600;
        color: #000000;
      `}

		${({ isFirstSelectedDate, isLastSeletectedDate }) =>
      (isFirstSelectedDate || isLastSeletectedDate) &&
      css`
        background-color: rgb(255, 171, 173);

        font-weight: 600;
        color: ${({ theme }) => theme.colors.primary.main};
      `}
  }
`;
