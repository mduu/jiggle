import * as React from 'react';

export interface MenuItemProps {
    text: string;
}

const MenuItem = (props: MenuItemProps) => (
    <div className="main-menu-item">{props.text}</div>
);

export default MenuItem;