import styled from '@emotion/styled';

export const FeedbackButton = styled.button`
width: 150px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  cursor: pointer;
  outline: none;
 text-transform: capitalize;
  font-size: 18px;
  font-weight: 500;
  background-color: transparent;
  transition: all 250ms ease-in-out;
    &:hover,
  &:focus-visible {
    transform: scale(1.2);
     background-color: rgb(250, 140, 15);
    box-shadow: 0px 8px 43px rgba(255, 107, 1, 0.6);
     
  }
`;