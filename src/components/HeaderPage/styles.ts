import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  strong {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  h4 {
    margin-left: 8px;
  }
`;

export const ContentLoading = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({ theme }) => theme.colors.primary.main};
`;
