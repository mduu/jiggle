import * as React from 'react';
import { TextField } from 'material-ui';
import { Tags } from '../../core';

export type TProps = {
  allTags: Tags;
};

export class TagSelector extends React.Component<TProps> {
    
  handleChange = (name: string) => (value: string) => {
    // this.setState({
    //   [name]: value,
    // });
  }
  
  render() {
    // const { classes } = this.props;

    return (
      <div>
        <TextField
          fullWidth={true}
          // onChange={this.handleChange('multiLabel')}
          placeholder="Enter Tags comma-separated"
          label="Tags"
        />
      </div>
    );
  }}