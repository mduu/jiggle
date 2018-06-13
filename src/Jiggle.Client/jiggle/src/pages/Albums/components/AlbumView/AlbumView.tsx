import * as React from 'react';
import { IAlbumMetadata, IAlbum } from '../../../../core';

export type TProps = {
    album: IAlbum;
};

export const AlbumView = ({ album }: TProps) => {

    return (
        <div>
            <h1>{album.name}</h1>
            
        </div>
    );
};