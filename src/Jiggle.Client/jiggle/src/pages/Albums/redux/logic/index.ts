import { IAlbum } from '../../../../core';

export function getVirtualRootAlbum(): IAlbum {
    const result = {
        id: 'root',
        name: 'Albums',
        createdBy: '',
    } as IAlbum;

    return result;
}