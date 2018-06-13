import { TAppState } from './reducers';
import { MasterdataState } from './masterdata';

export * from './reducers/';
export { store } from './store';

export const getMasterdataState = (state: TAppState): MasterdataState => ( state.masterdata );