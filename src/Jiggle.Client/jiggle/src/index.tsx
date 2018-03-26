import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// import Reboot from 'material-ui/Reboot';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App/App';

import './index.css';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    {/* <Reboot /> */}
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>, 
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
