import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const Item = styled.li`
list-style: none;
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  color: #1707f65a;
  `;