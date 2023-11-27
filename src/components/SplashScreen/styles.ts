import styled, { css, keyframes } from 'styled-components';

interface OverlayProps {
  isLeaving: boolean;
}

const fadeIn = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

const fadeOut = keyframes`
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
`;

export const Overlay = styled.div<OverlayProps>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.gray[0]};

  animation: ${fadeIn} 0.2s;

  ${({ isLeaving }) =>
    isLeaving &&
    css`
      animation: ${fadeOut} 0.3s forwards;
    `}

  h3 {
    margin-top: 24px;
    margin-bottom: 6px;

    span {
      font-weight: 300 !important;
    }
  }

  span {
    font-weight: 500;
  }
`;
