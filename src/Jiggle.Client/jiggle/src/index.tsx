import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components';

import './index.less';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#ff9100',
        },
        secondary: {
            main: '#ffd600',
        },
    },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        {/* <Reboot /> */}
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
