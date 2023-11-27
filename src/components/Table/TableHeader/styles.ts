import { rgba } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 16px;
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;

  strong {
    font-size: 18px;
    font-weight: 600;
  }

  span {
    margin-left: 8px;
    padding: 8px;
    background-color: ${({ theme }) => rgba(theme.colors.gray[200], 0.2)};
    border-radius: 4px;

    font-weight: 500;
  }
`;

export const AddButton = styled.button`
  border: 0;
  border-radius: 8px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gray[0]};

  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.main};

  transition: 0.2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

export const SubTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[300]};
  opacity: 0.9;
`;
