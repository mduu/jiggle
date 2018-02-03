import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

const App = ({}) => (

  <div className="App">
    <aside className="sidebar-menu">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Menu</h2>
    </aside>

    <section className="main-content">

      <h1 className="App-title">Welcome to Jiggle</h1>
      <p>
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>

    </section>
  </div>
);

export default App;
