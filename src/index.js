import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#52c7b8',
      main: '#00897B',
      dark: '#00675b',
      contrastText: '#FFF',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#fff',
    },
  },
});

render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root'));
registerServiceWorker();
