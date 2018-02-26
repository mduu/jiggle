import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as AppStore from '../../redux/AppStore';
import Menu from './Menu';
import Import from '../Import/Import';
import './App.css';

const mainContant = (selectedMainMenuItem: string) => {
  switch (selectedMainMenuItem) {
    case 'import':
        return <Import />;
    default:
        return (
          <section>
            <h1 className="App-title">Welcome to Jiggle</h1>
            <p>
              Later on here will be an activtiy stream of Jiggle.
            </p>
          </section>
        );
  }
};

export interface AppProps {
  selectedMainMenuItem: string;
}

const App = (props: AppProps) => (

  <div className="App">
    <Menu />

    <section className="main-content">
      {mainContant(props.selectedMainMenuItem)}
    </section>
  </div>
);

export function mapStateToProps({ selectedMainMenuItem }: AppStore.AppStoreState) {
  return {
      selectedMainMenuItem
  };
}

export function mapDispatchToProps(dispatch: Dispatch<AppStore.MainMenuAction>) {
  return {  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);