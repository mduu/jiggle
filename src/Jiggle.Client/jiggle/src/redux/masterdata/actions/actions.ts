import { Tags, IAlbumMetadata, IError } from '../../../core';
import * as constants from './constants';
import { TDispatchableReturn } from '../../types';

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
export const masterdataFetch = (): TDispatchableReturn<MasterdataAction> => 
    (dispatch, getState) => {

        const state = getState();

        if (state.masterdata.isFetching) {
            return Promise.resolve();
        }

        dispatch(masterdataRequest());

        const url = ''; // TODO
        return fetch(url)
            .then(
                response => response.json(),
                error => {
                    console.log('An error occurred.', error);
                    dispatch(masterdataError([{
                        message: error.message
                    } as IError]));
                }
            )
            .then(json =>
                dispatch(masterdataReceive(json.tags, json.albums))
            );
    };

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