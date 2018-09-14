import * as React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from '@material-ui/core';

export interface IProps {
    onConfirm: (albumName: string, albumDescription: string) => void;
    onCancel: () => void;
}

type TState = {
    albumTitle: string;
    albumDescription: string;
};

export default class AlbumCreateDialog extends React.Component<IProps, TState> {

    constructor (props: IProps) {
        super(props);
        this.state = {
            albumTitle: '',
            albumDescription: ''
        } as TState;
    }

    render() {
        const { onConfirm, onCancel } = this.props;
        const { albumTitle, albumDescription } = this.state;

        return (
            <div>
                <Dialog
                    open={true}
                    onClose={onCancel}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{'Create new album'}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Create a new album with the following information.
                        </DialogContentText>
                        <TextField
                            autoFocus={true}
                            margin="dense"
                            id="albumTitle"
                            label="Title"
                            fullWidth={true}
                            value={albumTitle}
                            onChange={(e) => this.setState({albumTitle: e.currentTarget.value})}
                        />
                        <TextField
                            margin="dense"
                            id="albumDescription"
                            label="Description"
                            fullWidth={true}
                            multiline={true}
                            rows={3}
                            value={albumDescription}
                            onChange={(e) => this.setState({albumDescription: e.currentTarget.value})}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onCancel} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={() => onConfirm(albumTitle, albumDescription)} color="primary" variant={'raised'}>
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}