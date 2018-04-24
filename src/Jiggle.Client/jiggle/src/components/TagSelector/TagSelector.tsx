import * as React from 'react';
import { Input, TextField, Chip, MenuItem } from 'material-ui';
import Select from 'react-select';
import { Tags } from '../../core';

type TStyle = {
  tagselectorRoot: string;
  tagselectorChip: string;
};

const styles: TStyle = require('./TagSelector.less');

const ITEM_HEIGHT = 48;

export type TProps = {
  allTags: Tags;
};

type TState = {
  single: string | null,
  multi?: string | null,
  multiLabel?: string | null,
};

export class TagSelector extends React.Component<TProps, TState> {
  
  constructor(props: TProps) {
    super(props);
    
    this.state = {
      single: null,
      multi: null,
      multiLabel: null;
    };
  }
  
  handleChange = (name: string) => (value: string) => {
    // this.setState({
    //   [name]: value,
    // });
  }
  
  render() {
    // const { classes } = this.props;

    return (
      <div>
        <Input
          fullWidth
          inputComponent={SelectWrapped}
          value={this.state.single}
          onChange={this.handleChange('single')}
          placeholder="Search a country (start with a)"
          id="react-select-single"
          inputProps={{
            name: 'react-select-single',
            // instanceId: 'react-select-single',
            // simpleValue: true,
            // options: suggestions,
          }}
        />
        <Input
          fullWidth
          inputComponent={SelectWrapped}
          value={this.state.multi}
          onChange={this.handleChange('multi')}
          placeholder="Select multiple countries"
          name="react-select-chip"
          inputProps={{
            multi: true,
            instanceId: 'react-select-chip',
            id: 'react-select-chip',
            simpleValue: true,
            options: suggestions,
          }}
        />
        <TextField
          fullWidth
          value={this.state.multiLabel}
          onChange={this.handleChange('multiLabel')}
          placeholder="Select multiple countries"
          name="react-select-chip-label"
          label="With label"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            inputComponent: SelectWrapped,
            inputProps: {
              classes,
              multi: true,
              instanceId: 'react-select-chip-label',
              id: 'react-select-chip-label',
              simpleValue: true,
              options: suggestions,
            },
          }}
        />
      </div>
    );
  }}