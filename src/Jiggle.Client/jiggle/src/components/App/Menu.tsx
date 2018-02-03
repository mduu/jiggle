import * as React from 'react';
import MenuItem  from './MenuItem';
import './Menu.css';

const logo = require('./logo.svg');

const Menu = ({}) => (
    <aside className="sidebar-menu">
        <img src={logo} className="App-logo" alt="logo" />

        <nav className="main-menu">
            <MenuItem text="Home" faIconName="fa-home" isSelected={true} />
            <MenuItem text="Import" faIconName="fa-upload" isSelected={false} />
            <MenuItem text="Albums" faIconName="fa-images" isSelected={false} />
            <MenuItem text="Faces" faIconName="fa-user" isSelected={false} />
            <MenuItem text="Locations" faIconName="fa-map-marker" isSelected={false} />
            <MenuItem text="Tags" faIconName="fa-tags" isSelected={false} />
       </nav>
    </aside>
);

export default Menu;
