import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 5px;

  font-weight: 700;
  font-size: 16px;

  background-color: #2196f3;
  color: #ffffff;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #188ce8;
  }
`;
