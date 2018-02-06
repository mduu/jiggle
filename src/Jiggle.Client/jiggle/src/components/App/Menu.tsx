import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import MenuItem  from './MenuItem';
import * as AppStore from '../../redux/AppStore';
import './Menu.css';

const logo = require('./logo.svg');

export interface MenuProps {
    selectedMainMenuItem: string;
}

const Menu = (props: MenuProps) => (
    <aside className="sidebar-menu">
        <img src={logo} className="App-logo" alt="logo" />

        <nav className="main-menu">
            <MenuItem 
                text="Home" 
                faIconName="fa-home" 
                isSelected={props.selectedMainMenuItem === 'home'} 
                onSelect={() => props.selectedMainMenuItem = 'home'}
            />
            <MenuItem 
                text="Import" 
                faIconName="fa-upload" 
                isSelected={props.selectedMainMenuItem === 'import'} 
                onSelect={() => props.selectedMainMenuItem = 'import'}
            />
            <MenuItem 
                text="Albums" 
                faIconName="fa-images" 
                isSelected={props.selectedMainMenuItem === 'albums'} 
                onSelect={() => props.selectedMainMenuItem = 'albums'}
            />
            <MenuItem 
                text="Faces" 
                faIconName="fa-user" 
                isSelected={props.selectedMainMenuItem === 'faces'} 
                onSelect={() => props.selectedMainMenuItem = 'faces'}
            />
            <MenuItem 
                text="Locations" 
                faIconName="fa-map-marker" 
                isSelected={props.selectedMainMenuItem === 'locations'} 
                onSelect={() => props.selectedMainMenuItem = 'locations'}
            />
            <MenuItem 
                text="Tags" 
                faIconName="fa-tags" 
                isSelected={props.selectedMainMenuItem === 'tags'} 
                onSelect={() => props.selectedMainMenuItem = 'tags'}
            />
       </nav>
    </aside>
);

export function mapStateToProps({ selectedMainMenuItem }: AppStore.AppStoreState) {
    return {
        selectedMainMenuItem
    };
}

export function mapDispatchToProps(dispatch: Dispatch<AppStore.MainMenuAction>) {
    return {
        onIncrement: (electedMainMenuItem: string) => dispatch(AppStore.mainMenuSelectItem(electedMainMenuItem)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
