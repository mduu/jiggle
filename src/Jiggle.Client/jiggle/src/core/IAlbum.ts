import { IAlbumMetadata, IAsset } from '.';

export interface IAlbum extends IAlbumMetadata {
    assets?: IAsset[];
    parentAlbum?: IAlbumMetadata;
    childAlbums?: IAlbumMetadata[];
}