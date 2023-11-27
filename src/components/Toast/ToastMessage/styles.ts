import styled, { css, keyframes } from 'styled-components';

import { IToast } from '../../../types/Toast';

const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: translateX(400px);
	}

	to {
		opacity: 1;
		transform: translateX(0);
	}
`;

const fadeOut = keyframes`
	from {
		opacity: 1;
		transform: translateX(0);
	}

	to {
		opacity: 0;
		transform: translateX(400px);
	}
`;

const progressBar = keyframes`
	from {
		width: 100%;
	}

	to {
		width: 0%;
	}
`;

const containerVariants = {
  DEFAULT: css`
    ${({ theme }) => theme.colors.gray[400]};
  `,
  SUCCESS: '#16ad3e',
  DANGER: css`
    ${({ theme }) => theme.colors.primary.main};
  `,
};

interface ContainerProps extends Pick<IToast, 'type'> {
  isLeaving: boolean;
  duration: number;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  max-width: 339px;
  display: flex;
  align-items: center;
  padding: 12px 16px calc(12px + 6px) 16px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.25);

  animation: ${fadeIn} 0.5s;

  ${({ isLeaving }) =>
    isLeaving &&
    css`
      animation: ${fadeOut} 0.5s forwards;
    `}

  & + div {
    margin-top: 12px;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 6px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: ${({ type }) =>
    containerVariants[type] || containerVariants.DEFAULT};

    animation-name: ${progressBar};
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-duration: ${({ duration }) => `${duration}ms`};
  }

  > svg {
    color: ${({ type }) =>
    containerVariants[type] || containerVariants.DEFAULT};
    margin-right: 12px;
  }

  span {
    flex: 1;
    margin-right: 12px;

    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  button {
    align-self: flex-start;
    width: 24px;
    height: 24px;
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
