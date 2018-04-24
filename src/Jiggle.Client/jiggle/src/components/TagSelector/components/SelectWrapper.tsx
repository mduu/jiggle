import * as React from 'react';

function SelectWrapped(props) {
    const { classes, ...other } = props;
  
    return (
      <Select
        optionComponent={Option}
        noResultsText={<Typography>{'No results found'}</Typography>}
        arrowRenderer={arrowProps => {
          return arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />;
        }}
        clearRenderer={() => <ClearIcon />}
        valueComponent={valueProps => {
          const { value, children, onRemove } = valueProps;
  
          const onDelete = event => {
            event.preventDefault();
            event.stopPropagation();
            onRemove(value);
          };
  
          if (onRemove) {
            return (
              <Chip
                tabIndex={-1}
                label={children}
                className={classes.chip}
                deleteIcon={<CancelIcon onTouchEnd={onDelete} />}
                onDelete={onDelete}
              />
            );
          }
  
          return <div className="Select-value">{children}</div>;
        }}
        {...other}
      />
    );
  }