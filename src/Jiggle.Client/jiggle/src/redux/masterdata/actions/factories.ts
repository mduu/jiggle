import { Tags, IAlbumMetadata, IError } from '../../../core';
import * as actionTypes from './types';

export function masterdataRequest(): actionTypes.MasterdataRequest {
    return {
        type: actionTypes.MASTERDATA_REQUEST
    };
}

export function masterdataReceive(tags: Tags, albums: IAlbumMetadata[]): actionTypes.MasterdataReceive {
    return {
        type: actionTypes.MASTERDATA_RECEIVE,
        tags,
        albums
    };
}

export function masterdataError(errors: IError[]): actionTypes.MasterdataError {
    return {
        type: actionTypes.MASTERDATA_ERROR,
        errors
    };
}