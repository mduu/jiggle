import { IAlbumMetadata, IAssetMetadata } from '.';

export interface IAlbum extends IAlbumMetadata {
    assets?: IAssetMetadata[];
    parentAlbum?: IAlbumMetadata;
    childAlbums?: IAlbumMetadata[];
}