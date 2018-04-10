import { Tags, IAlbumMetadata } from '..';

export interface IMasterdataPayload {
    tags: Tags;
    albums?: IAlbumMetadata[];
}