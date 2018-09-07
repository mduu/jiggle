import { IAlbum, IAlbumMetadata } from '../../../../core';
import { TAppState } from '../../../../redux/reducers';
import { getMasterdataState } from '../../../../redux';

export function getVirtualRootAlbum(state: TAppState): IAlbum {
    return {
        id: 'root',
        name: '',
        createdBy: '',
        childAlbums: getRootChildAlbums(state),
    } as IAlbum;
}

function getRootChildAlbums(state: TAppState): IAlbumMetadata[] {
    const allAlbums = getMasterdataState(state).albums;
    return allAlbums.filter((a) => !a.parentAlbumId);
}