import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as AppStore from '../../redux/AppStore';
import Menu from './Menu';
import MainContent from './MainContent';

import './App.css';

export type TAppProps = {
  selectedMainMenuItem: string;
};

const App = (props: TAppProps) => (

  <div className="App">
    <Menu />

    <section className="main-content">
      <MainContent />
    </section>
  </div>
);

export function mapStateToProps({ selectedMainMenuItem }: AppStore.IAppStoreState) {
  return {
      selectedMainMenuItem
  };
}

export function mapDispatchToProps(dispatch: Dispatch<AppStore.MainMenuAction>) {
  return {  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);