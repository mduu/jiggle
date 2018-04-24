import * as React from 'react';
import { Tag } from '../../core';
import { MenuItem } from 'material-ui';

export type TProps = {
    tag: Tag;
    isSelected: boolean;
    isFocused: boolean;
    // tslint:disable-next-line:no-any
    onSelect: (tag: Tag, event: any) => void;
    // tslint:disable-next-line:no-any
    onFocus: (event: any) => void;
};

export class Option extends React.Component<TProps> {
    // tslint:disable-next-line:no-any
    handleClick = (event: any) => {
      this.props.onSelect(this.props.tag, event);
    }
  
    render() {
      const { children, isFocused, isSelected, onFocus } = this.props;
  
      return (
        <MenuItem
          onFocus={onFocus}
          selected={isFocused}
          onClick={this.handleClick}
          component="div"
          style={{
            fontWeight: isSelected ? 500 : 400,
          }}
        >
          {children}
        </MenuItem>
      );
    }
  }