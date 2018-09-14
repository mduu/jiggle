import 'reflect-metadata';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initializeJiggleContainer } from './core/ioc';
import { Provider } from 'react-redux';
import { store } from './redux';
// import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components';

import './index.less';

export const container = initializeJiggleContainer();

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#d50000',
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
// registerServiceWorker();
