import { TTags, IAlbumMetadata } from '../../types';
import * as constants from '../constants';

export type MasterdataFetch = {
    type: constants.MASTERDATA_FETCH,
};

export type MasterdataRequest = {
    type: constants.MASTERDATA_RREQUEST,
};

export type MasterdataReceive = {
    type: constants.MASTERDATA_RECEIVE,
    tags: TTags;
    albums: IAlbumMetadata;
};

export type MasterdataAction = MasterdataFetch | MasterdataRequest | MasterdataReceive;

// TODO export function masterdataFetch(...)

export function masterdataRequest(): MasterdataRequest {
    return {
        type: constants.MASTERDATA_RREQUEST
    };
}

export function masterdataReceive(tags: TTags, albums: IAlbumMetadata): MasterdataReceive {
    return {
        type: constants.MASTERDATA_RECEIVE,
        tags,
        albums
    };
}