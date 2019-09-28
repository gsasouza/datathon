import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider, theme } from '@chakra-ui/core'

import Content from './components/common/Content'
import Dashboard from './components/dashboard/Dashboard';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
  * {
    font-family: Nunito Sans, sans-serif;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyle/>
      <Content>
        <Dashboard />
      </Content>
    </ThemeProvider>
  );
}

export default App;
