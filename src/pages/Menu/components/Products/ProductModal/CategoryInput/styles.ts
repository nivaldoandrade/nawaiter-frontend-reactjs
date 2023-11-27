import styled, { css } from 'styled-components';

interface CategoryContainerProps {
  isChangeCategory: boolean;
}

export const CategoryContainer = styled.div<CategoryContainerProps>`
  ${({ isChangeCategory }) =>
    isChangeCategory &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}

  .header-content {
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .category {
    margin: 16px 0;
    padding: 0 4px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 120px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 12px;
    row-gap: 16px;
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;
export const CategoryButton = styled.button`
  overflow: hidden;

  height: 45px;
  border: 0;
  background-color: transparent;
  border-radius: 75px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  padding: 11px 14px;

  border-width: 0.75px;
  border-style: solid;
  border-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.main};

  transition: 0.2s ease-in;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  i {
    width: 24px;
    height: 24px;
  }

  span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray[500]};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: break-spaces;
  }
`;
