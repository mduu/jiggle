import * as React from 'react';
import * as masterdataActions from '../../redux/masterdata/actions';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui';
import { MainContent } from './MainContent';

import './App.css';
import { Menu } from './Menu';

export type TOwnProps = {
  selectedMainMenuItem?: string;
};

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

        <section className="main-content">
          {isFetching && <CircularProgress />}
          {isLoaded && <MainContent />}
        </section>
      </div>
    );
  }
}

export function mapStateToProps(state: TStateProps) {
  return {
    isFetching: state.isFetching,
    isLoaded: state.isLoaded
  };
}

const dispatchProps: TDispatchProps = {
  onMasterdataFetch: masterdataActions.masterdataFetch
};

export const App = connect<TStateProps, TDispatchProps, TOwnProps>(mapStateToProps, dispatchProps)(AppComponent);