import { IError, Tags, IAlbumMetadata } from '../../core';

export interface MasterdataState {
    isFetching: boolean;
    isLoaded: boolean;
    errors?: IError[];
    tags: Tags;
    albums: IAlbumMetadata[];
    receivedAt?: number;
}