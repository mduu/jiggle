import { Tags, IAlbumMetadata, IError } from '../../types';
import * as constants from './constants';

export type MasterdataFetch = {
    type: constants.MASTERDATA_FETCH,
};

export type MasterdataRequest = {
    type: constants.MASTERDATA_REQUEST,
};

export type MasterdataReceive = {
    type: constants.MASTERDATA_RECEIVE,
    tags: Tags;
    albums: IAlbumMetadata[];
};

export type MasterdataError = {
    type: constants.MASTERDATA_ERROR,
    errors: IError[]
};

export type MasterdataAction = MasterdataFetch | MasterdataRequest | MasterdataReceive | MasterdataError;

// TODO export function masterdataFetch(...)

export function masterdataRequest(): MasterdataRequest {
    return {
        type: constants.MASTERDATA_REQUEST
    };
}

export function masterdataReceive(tags: Tags, albums: IAlbumMetadata[]): MasterdataReceive {
    return {
        type: constants.MASTERDATA_RECEIVE,
        tags,
        albums
    };
}

export function masterdataError(errors: IError[]): MasterdataError {
    return {
        type: constants.MASTERDATA_ERROR,
        errors
    };
}