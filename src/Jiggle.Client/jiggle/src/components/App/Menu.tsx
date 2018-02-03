import * as React from 'react';
import './Menu.css';

const logo = require('./logo.svg');

const Menu = ({}) => (
    <aside className="sidebar-menu">
        <img src={logo} className="App-logo" alt="logo" />

        <nav className="main-menu">
            <div className="main-menu-item">Home</div>
            <div className="main-menu-item">Faces</div>
        </nav>
    </aside>
);

export default Menu;
