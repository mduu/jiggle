import { MasterdataState, masterdata } from './masterdata';
import { combineReducers } from 'redux';

export { MasterdataState } from './masterdata';

export type TAppState = {
    masterdata: MasterdataState;
};

export const rootReducer = combineReducers<TAppState>({
    masterdata
});