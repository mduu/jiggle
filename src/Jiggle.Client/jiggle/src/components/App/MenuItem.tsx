import * as React from 'react';

export type TMenuItemProps = {
    text: string;
    faIconName: string;
    isSelected: boolean;
    onSelect?: () => void;
};

const MenuItem = (props: TMenuItemProps) => {
    let cssClassIcon = 'fas fa-fw ' + props.faIconName;
    let cssClassDiv = 'main-menu-item';
    if (props.isSelected) {
        cssClassDiv += ' selected';
    }

    return (
        <div className={cssClassDiv} onClick={props.onSelect}><i className={cssClassIcon} />&nbsp;{props.text}</div>
    );
};

export default MenuItem;