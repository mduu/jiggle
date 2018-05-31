import { Tags, IAlbumMetadata, IError } from '../../../core';

export type MasterdataAction = MasterdataFetch | MasterdataRequest | MasterdataReceive | MasterdataError;

export const MASTERDATA_REQUEST = 'MASTERDATA_REQUEST';
export type MASTERDATA_REQUEST = typeof MASTERDATA_REQUEST;
export type MasterdataRequest = {
    type: MASTERDATA_REQUEST,
};

export const MASTERDATA_RECEIVE = 'MASTERDATA_RECEIVE';
export type MASTERDATA_RECEIVE = typeof MASTERDATA_RECEIVE;
export type MasterdataReceive = {
    type: MASTERDATA_RECEIVE,
    tags: Tags;
    albums: IAlbumMetadata[];
};

export const MASTERDATA_FETCH = 'MASTERDATA_FETCH';
export type MASTERDATA_FETCH = typeof MASTERDATA_FETCH;
export type MasterdataFetch = {
    type: MASTERDATA_FETCH,
};

export const MASTERDATA_ERROR = 'MASTERDATA_ERROR';
export type MASTERDATA_ERROR = typeof MASTERDATA_ERROR;
export type MasterdataError = {
    type: MASTERDATA_ERROR,
    errors: IError[]
};