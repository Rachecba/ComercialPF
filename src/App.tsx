import { ThemeProvider } from 'styled-components'
import Header from "./Components/global/header/Header";
import Footer from "./Components/global/footer/Footer";

import * as Styled from './Components/pages/home/App.style'
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";
import { theme } from './utils/theming/theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Styled.ContainerWrap>
          <Header />
          <Main />
          <Footer />
        </Styled.ContainerWrap>
      </Router>
    </ThemeProvider>
  );
}

export default App;
