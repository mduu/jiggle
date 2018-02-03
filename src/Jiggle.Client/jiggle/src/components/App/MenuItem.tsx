import * as React from 'react';

export interface MenuItemProps {
    text: string;
    faIconName: string;
}

const MenuItem = (props: MenuItemProps) => {
    let cssClass = 'fas fa-fw ' + props.faIconName; 

    return (
        <div className="main-menu-item"><i className={cssClass} />&nbsp;{props.text}</div>
    );
};

export default MenuItem;