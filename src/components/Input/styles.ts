import styled from 'styled-components';

interface ContainerProps {
  icon: boolean;
  error: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  /* & + div {
		margin-top: 32px;
	} */

  label {
    font-size: 14px;
  }

  .input-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    small {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  .input-group {
    display: flex;
    align-items: center;
    position: relative;

    button {
      border: 0;
      font-size: 0;
      background-color: transparent;
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%);
    }
  }

  input {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[400]};

    width: 100%;
    border: 0;
    padding: ${({ icon }) => (icon ? ' 16px 44px 16px 16px' : '16px')};

    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme, error }) =>
      /* eslint-disable prettier/prettier */
      !error
        ? theme.colors.gray[200]
        : `${theme.colors.primary.main} !important`};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.gray[400]};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[300]};
    }
  }
`;
