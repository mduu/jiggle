import { IError, Tags, IAlbumMetadata } from '../../core';

// tslint:disable-next-line:interface-name
export interface MasterdataState {
    isFetching: boolean;
    isLoaded: boolean;
    errors?: IError[];
    tags: Tags;
    albums: IAlbumMetadata[];
    receivedAt?: number;
}