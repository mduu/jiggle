import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import { appStore } from './redux/AppStore';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import './index.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={appStore}>
      <App />
    </Provider>
  </MuiThemeProvider>, 
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
