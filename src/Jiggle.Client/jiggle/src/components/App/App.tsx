import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as AppStore from '../../redux/AppStore';
import Menu from './Menu';
import MainContent from './MainContent';

import './App.css';

export interface AppProps {
  selectedMainMenuItem: string;
}

const App = (props: AppProps) => (

  <div className="App">
    <Menu />

    <section className="main-content">
      <MainContent />
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