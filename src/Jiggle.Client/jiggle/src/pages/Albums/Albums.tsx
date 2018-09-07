import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import './Albums.css';
import { getMasterdataState, store, TAppState } from '../../redux';
import { Tags, IAlbumMetadata, IAlbum } from '../../core';
import * as fromActions from './redux/actions';
import { getVirtualRootAlbum } from './redux/logic';
import { AlbumView } from './components';
import { getAlbumPageCurrentState } from './redux/state';
import NewAlbum from '@material-ui/icons/LibraryAdd';
import AlbumCreateDialog from '../../components/AlbumCreateDialog/AlbumCreateDialog';

type TOwnProps = {};

type TStateProps = {
    allTags: Tags;
    allAlbums: IAlbumMetadata[];
    currentAlbum?: IAlbum;
};

type TDispatchProps = {
    changeCurrentAlbum: (currentAlbum: IAlbum) => void;
};

type TProps = TOwnProps & TStateProps & TDispatchProps;

type TState = {
    showCreateAlbumDialog: boolean;
};

class AlbumsComponent extends React.Component<TProps, TState> {

    constructor(props: TProps) {
        super(props);
        this.state = {
            showCreateAlbumDialog: false
        };
    }

    componentDidMount() {
        const virtualRootAlbum = getVirtualRootAlbum(store.getState());
        const {changeCurrentAlbum} = this.props;
        changeCurrentAlbum(virtualRootAlbum);
    }

    handleDoCreateNewAlbum = (albumTitle: string, albumDescription: string) => {
        this.setState({showCreateAlbumDialog: false});

        // TODO
        console.log(`create new album: ${albumTitle} / ${albumDescription}`);
    }

    render() {
        const {currentAlbum} = this.props;
        const {showCreateAlbumDialog} = this.state;

        return (
            <div>
                <h1>Albums</h1>

                {showCreateAlbumDialog &&
                <AlbumCreateDialog
                    onConfirm={this.handleDoCreateNewAlbum}
                    onCancel={() => this.setState({showCreateAlbumDialog: false})}
                />}

                <Button
                    onClick={() => this.setState({showCreateAlbumDialog: true})}
                    color="primary"
                    variant="raised"
                    aria-label="Create new album"
                >
                    <NewAlbum />
                    New album
                </Button>
                {currentAlbum && <AlbumView album={currentAlbum}/>}
            </div>
        );
    }
}

export function mapStateToProps(state: TAppState): TStateProps {
    const masterdata = getMasterdataState(state);
    const albumPageCurrentState = getAlbumPageCurrentState(state);
    return {
        allTags: masterdata.tags,
        allAlbums: masterdata.albums,
        currentAlbum: albumPageCurrentState.currentAlbum
    };
}

function mapDispatchToProps(dispatch: Dispatch<fromActions.AlbumPageAction>): TDispatchProps {
    return {
        changeCurrentAlbum: (currentAlbum: IAlbum) => dispatch(fromActions.changeCurrentAlbum(currentAlbum)),
    } as TDispatchProps;
}

// tslint:disable-next-line:max-line-length
export const Albums = connect<TStateProps, TDispatchProps, TOwnProps>(mapStateToProps, mapDispatchToProps)(AlbumsComponent);