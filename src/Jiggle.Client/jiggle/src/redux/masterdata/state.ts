import { IError, Tags, IAlbumMetadata } from '../../core';
import { TAppState } from '../reducers';

/**
 * Gets the MasterdataState out of the global application state.
 * @param {TAppState} state The global application state.
 * @returns {MasterdataState} The MasterdataState sub-state.
 */
export const getMasterdataState = (state: TAppState): MasterdataState => ( state.masterdata );

// tslint:disable-next-line:interface-name
export interface MasterdataState {
    isFetching: boolean;
    isLoaded: boolean;
    errors?: IError[];
    tags: Tags;
    albums: IAlbumMetadata[];
    receivedAt?: number;
}