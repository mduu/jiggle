import { IAlbum } from '../../../../core';

export type AlbumPageAction = ChangeCurrentAlbum;

export const CHANGE_CURRENT_ALBUM = 'CHANGE_CURRENT_ALBUM';
export type CHANGE_CURRENT_ALBUM = typeof CHANGE_CURRENT_ALBUM;
export type ChangeCurrentAlbum = {
    type: CHANGE_CURRENT_ALBUM,
    currentAlbum: IAlbum
};