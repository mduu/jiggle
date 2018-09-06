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

class AlbumsComponent extends React.Component<TProps> {

    componentDidMount() {
        const virtualRootAlbum = getVirtualRootAlbum(store.getState());
        const {changeCurrentAlbum} = this.props;
        changeCurrentAlbum(virtualRootAlbum);
    }

    render() {
        const { currentAlbum } = this.props;

        return (
            <div>
                <Button>New Album</Button>
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