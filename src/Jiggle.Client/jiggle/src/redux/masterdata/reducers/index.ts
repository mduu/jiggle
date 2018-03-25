import { IAlbumMetadata, Tags, IError } from '../../../core';
import { MasterdataAction } from '../actions/';
import * as constants from '../actions/constants';

export type MasterdataState = {
    isFetching: boolean;
    isLoaded: boolean;
    errors: IError[];
    tags: Tags;
    albums: IAlbumMetadata[];
    receivedAt: number;
};

export function masterdata(state: MasterdataState, action: MasterdataAction): MasterdataState {

    switch (action.type) {
        case constants.MASTERDATA_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case constants.MASTERDATA_RECEIVE:
            return {
                ...state,
                tags: action.tags,
                albums: action.albums,
                isFetching: false,
                receivedAt: Date.now()
            };
        case constants.MASTERDATA_ERROR:
            return {
                ...state,
                errors: action.errors
            };
        default:
            return state;
    }
}