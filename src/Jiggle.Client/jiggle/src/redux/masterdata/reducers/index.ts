import { MasterdataAction } from '../actions/';
import * as constants from '../actions/types';
import { MasterdataState } from '..';

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