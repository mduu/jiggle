import * as React from 'react';
import * as masterdataActions from '../../redux/masterdata/actions';
import { connect } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { AppBar, CircularProgress, Toolbar, Typography } from '@material-ui/core';
import { MainContent } from './MainContent';
import { Menu } from './Menu';
import { getMasterdataState, TAppState } from '../../redux';
import { IError } from '../../core';
import { ErrorMessage } from '../../elements';

type TStyles = {
    appRoot: string;
    appAppBar: string;
    appContent: string;
    appMenu: string;
    appMainContent: string;
};

const styles: TStyles = require('./App.less');

export type TOwnProps = {
    selectedMainMenuItem?: string;
} & RouteComponentProps<{}>;

type TStateProps = {
    isFetching: boolean;
    isLoaded: boolean;
    errors?: IError[];
};

type TDispatchProps = {
    onMasterdataFetch: () => void;
};

type TProps = TOwnProps & TStateProps & TDispatchProps;

export class AppComponent extends React.Component<TProps> {

    componentDidMount() {
        const {onMasterdataFetch} = this.props;

        if (onMasterdataFetch) {
            onMasterdataFetch();
        }
    }

    render() {
        const {isFetching, isLoaded, errors} = this.props;

        return (
            <div className={styles.appRoot}>
                <AppBar position="absolute" className={styles.appAppBar}>
                    <Toolbar>
                        <Typography variant="title" color="inherit" noWrap={true}>
                            Jiggle
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div className={styles.appContent}>
                    <div className={styles.appMenu}>
                        <Menu/>
                    </div>

                    <div className={styles.appMainContent}>
                        <Route path="*">
                            <section className="main-content">
                                {isFetching && <CircularProgress/>}
                                {errors && errors.length > 0 && errors.map((e, i) =>
                                    <ErrorMessage key={i} error={e} />)
                                }
                                {isLoaded && <MainContent/>}
                            </section>
                        </Route>
                    </div>
                </div>
            </div>
        );
    }
}

export function mapStateToProps(state: TAppState) {
    const masterdataState = getMasterdataState(state);

    return {
        isFetching: masterdataState.isFetching,
        isLoaded: masterdataState.isLoaded,
        errors: masterdataState.errors
    };
}

const dispatchProps: TDispatchProps = {
    onMasterdataFetch: masterdataActions.masterdataFetch
};

// tslint:disable-next-line:max-line-length
export const App = withRouter<TOwnProps>(connect<TStateProps, TDispatchProps, TOwnProps>(mapStateToProps, dispatchProps)(AppComponent));