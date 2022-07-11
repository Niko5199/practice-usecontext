import React from "react";
import styled from "styled-components";

const Button = ({ changeTheme, flag, Theme }) => {
  return (
    <StyledButton onClick={() => changeTheme(flag)} flag={flag} Theme={Theme}>
      Change theme
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  all: unset;
  color: ${({ flag, Theme }) =>
    flag ? Theme.dark.foreground : Theme.light.foreground};
  background-color: ${({ flag, Theme }) =>
    flag ? Theme.dark.background : Theme.light.background};
  border: 2px solid black;
  border-radius: 6px;
  cursor: pointer;
  display: block;
  font-family: Helvetica, sans-serif;
  margin: 0px auto;
  padding: 10px;
`;
