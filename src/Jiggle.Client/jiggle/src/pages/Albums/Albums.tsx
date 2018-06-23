import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import './Albums.css';
import { getMasterdataState, TAppState } from '../../redux';
import { Tags, IAlbumMetadata, IAlbum } from '../../core';
import * as fromActions from './redux/actions';

type TOwnProps = {};

type TStateProps = {
    allTags: Tags;
    allAlbums: IAlbumMetadata[];
};

type TDispatchProps = {
    changeCurrentAlbum: (currentAlbum: IAlbum) => void;
};

type TProps = TOwnProps & TStateProps & TDispatchProps;

class AlbumsComponent extends React.Component<TProps> {

    componentDidMount() {
        const virtualRootAlbum = getVirtualRootAlbum();
        const {changeCurrentAlbum} = this.props;
        changeCurrentAlbum(virtualRootAlbum);
    }

    render() {
        return (
            <section className="Albums">
                <h1>Albums</h1>
                <p>Under constuction...</p>
            </section>
        );
    }

}

export function mapStateToProps(state: TAppState): TStateProps {
    const masterdata = getMasterdataState(state);

    return {
        allTags: masterdata.tags,
        allAlbums: masterdata.albums,
    };
}

function mapDispatchToProps(dispatch: Dispatch<fromActions.AlbumPageAction>): TDispatchProps {
    return {
        changeCurrentAlbum: (currentAlbum: IAlbum) => dispatch(fromActions.changeCurrentAlbum(currentAlbum)),
    } as TDispatchProps;
}

// tslint:disable-next-line:max-line-length
export const Albums = connect<TStateProps, TDispatchProps, TOwnProps>(mapStateToProps, mapDispatchToProps)(AlbumsComponent);