import * as React from 'react';
import { MainContent } from './MainContent';

import './App.css';
import { Menu } from './Menu';

export type TAppProps = {
  selectedMainMenuItem?: string;
};

export const App = (props: TAppProps) => (
  <div className="App">
    <Menu />

    <section className="main-content">
      <MainContent />
    </section>
  </div>
);