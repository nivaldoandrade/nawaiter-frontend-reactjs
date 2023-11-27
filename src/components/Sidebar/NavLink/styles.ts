import { NavLink as RRDNavLinkProps } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyle = styled(RRDNavLinkProps)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 109px;
  padding: 24px;
  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 500;
    margin: 8px 0 8px 0;
  }

  color: ${({ theme }) => theme.colors.gray[400]};

  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};

    svg {
      & > path {
        stroke: ${({ theme }) => theme.colors.primary.main};
      }
    }

    &::after {
      content: '';
      width: 12px;
      height: 1px;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;
