import { IAlbum } from '../../../core';
import { TAppState } from '../../../redux';

export const getAlbumPageState = (state: TAppState): AlbumsPageState => ( state.albumPage);
export const getAlbumPageCurrentState = (state: TAppState): AlbumsPageCurrentState => ( getAlbumPageState(state).current );

// tslint:disable-next-line:interface-name
export interface AlbumsPageState {
    current: AlbumsPageCurrentState;
}

// tslint:disable-next-line:interface-name
export interface AlbumsPageCurrentState {
    currentAlbum?: IAlbum;
}