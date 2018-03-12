import * as React from 'react';
import { NavLink } from 'react-router-dom';

export type TMenuItemProps = {
    text: string;
    faIconName: string;
    routeTo: string;
};

export const MenuItem = (props: TMenuItemProps) => {
    let cssClassIcon = 'fas fa-fw ' + props.faIconName;

    return (
        <NavLink exact={true} to={props.routeTo} activeClassName="selected">
            <div className="main-menu-item">
                <i className={cssClassIcon} />&nbsp;{props.text}
            </div>
        </NavLink>
    );
};