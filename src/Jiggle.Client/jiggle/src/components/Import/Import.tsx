import * as React from 'react';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

import './Import.css';

const Import = ({}) => (

  <section className="Import">
    <h1>Import Assets</h1>
    <p>
      Upload / Import your asset like images into a new or existing album. You can also add tags (keywords) so you
      easiliy find it later on.
    </p>

    <form autoComplete="off">

      <Grid container={true} xs={12}>

        <Grid item={true} xs={12}>
          <TextField 
            id="newalbumname"
            label="New album name"
            placeholder="Name of the new album"
            required={true}
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

export default Import;