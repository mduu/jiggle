import * as React from 'react';
import MenuItem  from './MenuItem';
import './Menu.css';

const logo = require('./logo.svg');

const Menu = ({}) => (
    <aside className="sidebar-menu">
        <img src={logo} className="App-logo" alt="logo" />

        <nav className="main-menu">
            <MenuItem text="Home" />
            <MenuItem text="Import" />
            <MenuItem text="Faces" />
            <MenuItem text="Locations" />
            <MenuItem text="Tags" />
       </nav>
    </aside>
);

export default Menu;
