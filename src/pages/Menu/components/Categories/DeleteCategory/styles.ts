import styled from 'styled-components';

export const Category = styled.span`
  padding: 14px;
  border-radius: 75px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);

  font-size: 14px;

  i {
    display: inline-block;
    width: 24px;
    margin-right: 8px;
    text-align: center;
  }
`;
