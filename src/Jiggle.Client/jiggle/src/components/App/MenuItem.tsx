import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

export type TMenuItemProps = {
    text: string;
    faIconName: string;
    routeTo: string;
};

export const MenuItem = (props: TMenuItemProps) => {
    let cssClassIcon = 'fas fa-fw ' + props.faIconName;

    return (
        <NavLink exact={true} to={props.routeTo} activeClassName="selected">
            <ListItem button={true}>
                <ListItemIcon>
                    <i className={cssClassIcon} />
                </ListItemIcon>
                <ListItemText primary={props.text} />
            </ListItem>
        </NavLink>
    );
};