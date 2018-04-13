import { Tags, IAlbumMetadata, IError } from '../../../core';
import * as constants from './constants';
import { TDispatchableReturn } from '../../types';
import { ServerFactory } from '../../../core/communication/servers';

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
    async (dispatch, getState) => {

        const state = getState();

        if (state.masterdata.isFetching) {
            return Promise.resolve();
        }

        dispatch(masterdataRequest());

        const server = new ServerFactory().createServer();

        const response = await server.getMasterdata();
        if (response.errors) {
            dispatch(masterdataError(response.errors.map((e) => ({
                code: e.errorCode,
                fieldName: e.fieldName,
                message: e.message
            }) as IError)));
        } else {
            dispatch(masterdataReceive(
                response.payload.tags, 
                response.payload.albums ? response.payload.albums : []));
        }
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