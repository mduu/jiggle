import * as React from 'react';
import { connect } from 'react-redux';
import {
    Button,
    TextField,
    Grid,
    FormControl,
    InputLabel,
    Select,
    Input,
    MenuItem,
    FormHelperText,
    Typography
} from '@material-ui/core';
import { TagSelector } from '../../components';
import { Tags, IAlbumMetadata } from '../../core';

import './Import.less';
import { TAppState } from '../../redux';

export type TOwnProps = {};

type TStateProps = {
    tags: Tags;
    albums: IAlbumMetadata[];
};

type TDispatchProps = {};

type TProps = TOwnProps & TStateProps & TDispatchProps;

class ImportComponent extends React.Component<TProps> {
    // tslint:disable-next-line:no-any
    handleChange = (event: any) => {
        // this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {albums, tags} = this.props;

        return (
            <section className="Import">
                <Typography variant="headline">Import Assets</Typography>
                <Typography variant="body1">
                    Upload / Import your asset like images into a new or existing album. You can also add tags
                    (keywords) so you
                    easiliy find it later on.
                </Typography>

                <form autoComplete="off">

                    <Grid container={true}>

                        <Grid item={true} xs={3}>
                            <FormControl>
                                <InputLabel htmlFor="age-helper">Existing album</InputLabel>
                                <Select
                                    value=""
                                    onChange={this.handleChange}
                                    input={<Input name="existingAlbum" id="existingAlbum-helper"/>}
                                >
                                    <MenuItem value=""><em>New album</em>
                                    </MenuItem>
                                    {albums && albums.map((a, i) => (
                                        <MenuItem key={i} value={a.id}>{a.name}</MenuItem>
                                    ))}
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
                            <TagSelector allTags={tags}/>
                        </Grid>

                        <Grid item={true} xs={12}>
                            <InputLabel>Files/Images</InputLabel>
                        </Grid>

                        <Grid item={true} xs={12}>
                            <input type="file" multiple={true}/>
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

export function mapStateToProps(state: TAppState) {
    return {
        tags: state.masterdata.tags,
        albums: state.masterdata.albums
    };
}

const dispatchProps: TDispatchProps = {};

// tslint:disable-next-line:max-line-length
export const Import = connect<TStateProps, TDispatchProps, TOwnProps>(mapStateToProps, dispatchProps)(ImportComponent);