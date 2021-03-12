import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
  toggleborder: ${(props) => props.theme.toggleBorder};
  background: ${(props) => props.theme.background};
`;

function Feature() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="feature">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <button onClick={() => themeToggler()}>Change Theme</button>
        </StyledApp>
      </ThemeProvider>
    </div>
  );
}

export default Feature;
