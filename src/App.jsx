import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
const ThemeContext = createContext(themes);

const App = () => {
  const [flag, setFlag] = useState(true);
  const Theme = useContext(ThemeContext);

  const changeTheme = (flag) => {
    flag ? setFlag(false) : setFlag(true);
  };
  return (
    <StyledContainer flag={flag} Theme={Theme}>
      <StyledComponent>
        <StyledName>Josué A. Rojas</StyledName>
        <StyledBody>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original.
        </StyledBody>
      </StyledComponent>
      <StyledComponent>
        <StyledName>Brenda Campos</StyledName>
        <StyledBody>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original.
        </StyledBody>
      </StyledComponent>
      <Button changeTheme={changeTheme} flag={flag} Theme={Theme} />
    </StyledContainer>
  );
};

export default App;

const StyledContainer = styled.div`
  background-color: ${({ flag, Theme }) =>
    flag ? Theme.light.background : Theme.dark.background};
  border-radius: 6px;
  border: 1px solid #ccc;
  color: ${({ flag, Theme }) =>
    flag ? Theme.light.foreground : Theme.dark.foreground};
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px auto;
  min-height: 50px;
  padding: 20px;
  width: 500px;
`;

const StyledComponent = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 150px;
  margin: 0px auto;
  width: 500px;
`;

const StyledName = styled.h1`
  font-size: 20px;
`;

const StyledBody = styled.p`
  font-size: 12px;
  font-family: Helvetica, sans-serif;
  line-height: 20px;
  text-align: justify;
`;
