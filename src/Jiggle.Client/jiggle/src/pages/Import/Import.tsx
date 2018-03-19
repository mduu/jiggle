import * as React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import { FormControl, InputLabel, Select, Input, MenuItem, FormHelperText, Icon } from 'material-ui';
import TagSelector from '../../components/TagSelector/TagSelector';
import Dropzone, { ImageFile } from 'react-dropzone';

import './Import.css';

export interface IProps {
}

interface IState {
  // tslint:disable-next-line:no-any
  filesPreview: any[];
  filesToBeSent: ImageFile[];
}

class Import extends React.Component<IProps, IState> {
  state: IState = {
    filesPreview: [],
    filesToBeSent: []
  };

  // tslint:disable-next-line:no-any
  handleChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onDrop(acceptedFiles: ImageFile[], rejectedFiles: ImageFile[]) {
    // tslint:disable-next-line:no-console
    console.log('Accepted files: ', acceptedFiles[0].name);
    let filesToBeSent = this.state.filesToBeSent;
    filesToBeSent.push(...acceptedFiles);

    let filesPreview = this.state.filesToBeSent.map((f, i) => {
      return (
        <div key={i}>
          {f.name}
          <a href="#">
            <Icon>clear</Icon>
          </a>
        </div>
      );
    });

    this.setState({ ...this.state, filesToBeSent, filesPreview }); 
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

          <Grid container={true}>

            <Grid item={true} xs={3}>
              <FormControl>
                <InputLabel htmlFor="age-helper">Existing album</InputLabel>
                <Select
                  value=""
                  onChange={this.handleChange}
                  input={<Input name="existingAlbum" id="existingAlbum-helper" />}
                >
                  <MenuItem value=""><em>New album</em>
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

            <Grid item={true} xs={12}>
              <TextField 
                id="takenBy"
                label="Taken by"
                placeholder="Name of photographer"
                required={false}
                fullWidth={true}
              />
            </Grid>

            <Grid item={true} xs={12}>
              <InputLabel>Tags</InputLabel>
            </Grid>
            <Grid item={true} xs={12}>
              <TagSelector />
            </Grid>

            <Grid item={true} xs={12}>
              <InputLabel>Files/Images</InputLabel>
            </Grid>
            <Grid item={true} xs={12}>
              <Dropzone onDrop={(accepted, rejected) => this.onDrop(accepted, rejected)}>
                  <div>Try dropping some files here, or click to select files to upload.</div>
              </Dropzone>
              <div>
                Files to upload/import are:
                {this.state.filesPreview}
              </div>
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