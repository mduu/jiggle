import * as React from 'react';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

import './Import.css';
import { FormControl, InputLabel, Select, Input, MenuItem, FormHelperText } from 'material-ui';

class Import extends React.Component {
  state = {
    age: '',
    name: 'hai',
  };

  // tslint:disable-next-line:no-any
  handleChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <section className="Import">
        <h1>Import Assets</h1>
        <p>
          Upload / Import your asset like images into a new or existing album. You can also add tags (keywords) so you
          easiliy find it later on.
        </p>

        <form autoComplete="off">

          <Grid container={true} xs={12}>

            <Grid item={true} xs={3}>
              <FormControl>
              <InputLabel htmlFor="age-helper">Existing album</InputLabel>
              <Select
                value={this.state.age}
                onChange={this.handleChange}
                input={<Input name="existingAlbum" id="existingAlbum-helper" />}
              >
                <MenuItem value="">
                  <em>New album</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>If album doesn't exists create a new one.</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item={true} xs={3}>
              <TextField 
                id="newalbumname"
                label="New album name"
                placeholder="Name of the new album"
                required={true}
                fullWidth={true}
              />
            </Grid>

            <Grid item={true} xs={6}>
              <TextField 
                id="newalbumdescription"
                label="New album description"
                placeholder="Description of the new album"
                required={false}
                fullWidth={true}
              />
            </Grid>

            <Grid item={true} xs={6}>
              <TextField 
                id="takenBy"
                label="Taken by"
                placeholder="Name of photographer"
                required={false}
                fullWidth={true}
              />
            </Grid>

            <Grid item={true} xs={12}>
              <Button variant="raised" color="primary">
                Start Import
              </Button>
            </Grid>

          </Grid>

        </form>
      </section>
    );
  }
}

export default Import;