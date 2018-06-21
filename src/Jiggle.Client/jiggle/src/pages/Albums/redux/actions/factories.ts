import { IAlbum } from '../../../../core';
import { ChangeCurrentAlbum, CHANGE_CURRENT_ALBUM } from './types';

export function changeCurrentAlbum(currentAlbum: IAlbum): ChangeCurrentAlbum {
    return {
        type: CHANGE_CURRENT_ALBUM,
        currentAlbum
    };
}