import * as React from 'react';
import * as masterdataActions from '../../redux/masterdata/actions';
import { connect } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { CircularProgress } from 'material-ui';
import { MainContent } from './MainContent';

import './App.css';
import { Menu } from './Menu';
import { TAppState } from '../../redux';

export type TOwnProps = {
  selectedMainMenuItem?: string;
} & RouteComponentProps<{}>;

type TStateProps = {
  isFetching: boolean;
  isLoaded: boolean;
};

type TDispatchProps = {
  onMasterdataFetch: () => void;
};

type TProps = TOwnProps & TStateProps & TDispatchProps;

export class AppComponent extends React.Component<TProps> {

  componentDidMount() {
    const { onMasterdataFetch } = this.props;

    if (onMasterdataFetch) {
      onMasterdataFetch();
    }
  }

  render() {
    const { isFetching, isLoaded } = this.props;

    return (
      <div className="App">
        <Menu />

        <Route path="*" >
          <section className="main-content">
            {isFetching && <CircularProgress />}
            {isLoaded && <MainContent />}
          </section>
        </Route>
      </div>
    );
  }
}

export function mapStateToProps(state: TAppState) {
  return {
    isFetching: state.masterdata.isFetching,
    isLoaded: state.masterdata.isLoaded
  };
}

const dispatchProps: TDispatchProps = {
  onMasterdataFetch: masterdataActions.masterdataFetch
};

// tslint:disable-next-line:max-line-length
export const App = withRouter<TOwnProps>(connect<TStateProps, TDispatchProps, TOwnProps>(mapStateToProps, dispatchProps)(AppComponent));