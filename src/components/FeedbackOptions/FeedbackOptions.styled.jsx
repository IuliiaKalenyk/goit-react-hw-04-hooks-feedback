import styled from '@emotion/styled';

export const List = styled.ul`
display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  text-align: center;
   
`;

export const Item = styled.li`
 background-color: rgba(125, 38, 206, 0.14);
  &:not(:last-child) {
    margin-right: 50px;
    
  }
`;
