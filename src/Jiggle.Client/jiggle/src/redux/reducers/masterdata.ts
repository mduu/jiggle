import { IAlbumMetadata, TTags } from '../../types';
import { MasterdataAction } from '../actions';

export type MasterdataState = {
    tags: TTags;
    // tslint:disable-next-line:no-any
    albums: IAlbumMetadata[]; // TODO Type this
};

export function masterdata(state: MasterdataState, action: MasterdataAction): MasterdataState {

    // TODO

    return state;
}