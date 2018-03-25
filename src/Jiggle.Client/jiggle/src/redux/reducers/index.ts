import { combineReducers } from 'redux';
import { masterdata, MasterdataState } from '../masterdata/';

export type TAppState = {
    masterdata: MasterdataState;
};

export const rootReducer = combineReducers<TAppState>({
    masterdata
});