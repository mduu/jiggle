import * as React from 'react';
import { IAlbum } from '../../../../core';

export type TProps = {
    album: IAlbum;
};

export const AlbumView = ({ album }: TProps) => {

    return (
        <div>
            {album.name !== '' && <h2>{album.name}</h2>}
        </div>
    );
};