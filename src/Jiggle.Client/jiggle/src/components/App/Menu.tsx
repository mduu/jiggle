import * as React from 'react';
import MenuItem  from './MenuItem';
import './Menu.css';

const logo = require('./logo.svg');

const Menu = ({}) => (
    <aside className="sidebar-menu">
        <img src={logo} className="App-logo" alt="logo" />

        <nav className="main-menu">
            <MenuItem text="Home" faIconName="fa-home" />
            <MenuItem text="Import" faIconName="fa-upload" />
            <MenuItem text="Albums" faIconName="fa-images" />
            <MenuItem text="Faces" faIconName="fa-user" />
            <MenuItem text="Locations" faIconName="fa-map-marker" />
            <MenuItem text="Tags" faIconName="fa-tags"/>
       </nav>
    </aside>
);

export default Menu;
