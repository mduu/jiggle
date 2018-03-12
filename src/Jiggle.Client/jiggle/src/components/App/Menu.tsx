import * as React from 'react';
import { MenuItem } from './MenuItem';
import './Menu.css';

const logo = require('./logo.svg');

export const Menu = () => (
    
    <aside className="sidebar-menu">
        <img src={logo} className="App-logo" alt="logo" />

        <nav className="main-menu">
            <MenuItem 
                text="Home" 
                faIconName="fa-home" 
                routeTo="/"
            />
            <MenuItem 
                text="Import" 
                faIconName="fa-upload" 
                routeTo="/import"
            />
            <MenuItem 
                text="Albums" 
                faIconName="fa-images" 
                routeTo="/albums"
            />
            <MenuItem 
                text="Faces" 
                faIconName="fa-user" 
                routeTo="/faces"
            />
            <MenuItem 
                text="Locations" 
                faIconName="fa-map-marker" 
                routeTo="/locations"
            />
            <MenuItem 
                text="Tags" 
                faIconName="fa-tags" 
                routeTo="/tags"
            />
       </nav>
    </aside>
);
