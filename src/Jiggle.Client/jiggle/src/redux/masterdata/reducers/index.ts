import { IAlbumMetadata, Tags, IError } from '../../../core';
import { MasterdataAction } from '../actions/';
import * as constants from '../actions/constants';

export type MasterdataState = {
    isFetching: boolean;
    isLoaded: boolean;
    errors?: IError[];
    tags: Tags;
    albums: IAlbumMetadata[];
    receivedAt?: number;
};

const initalState = {
    isFetching: false,
    isLoaded: false,
    tags: [],
    albums: []
};

export function masterdata(state: MasterdataState = initalState, action: MasterdataAction): MasterdataState {

    switch (action.type) {
        case constants.MASTERDATA_REQUEST:
            return {
                ...state,
                isFetching: true,
                isLoaded: false,
            };
        case constants.MASTERDATA_RECEIVE:
            return {
                ...state,
                tags: action.tags,
                albums: action.albums,
                isFetching: false,
                isLoaded: true,
                receivedAt: Date.now()
            };
        case constants.MASTERDATA_ERROR:
            return {
                ...state,
                isFetching: false,
                isLoaded: false,
                errors: action.errors
            };
        default:
            return state;
    }
}