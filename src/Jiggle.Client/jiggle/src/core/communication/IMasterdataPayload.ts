import { Tags, IAlbumMetadata } from '..';

export interface IMasterdataPayload {
    allTags: Tags;
    allAlbums?: IAlbumMetadata[];
}