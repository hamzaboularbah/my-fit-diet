import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { GlobalContainer } from "styles";
import { GlobalStyle } from "styles";
import theme from "theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalContainer>
        <App />
      </GlobalContainer>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
