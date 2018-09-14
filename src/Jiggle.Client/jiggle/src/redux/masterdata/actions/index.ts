import { TDispatchableReturn } from '../../types';
import { MasterdataAction } from '..';
import { masterdataError, masterdataReceive, masterdataRequest } from './factories';
import { IError, remote } from '../../../core';

export * from './types';

export const masterdataFetch = (): TDispatchableReturn<MasterdataAction> => 
    async (dispatch, getState) => {

        const state = getState();

        if (state.masterdata.isFetching) {
            return Promise.resolve();
        }

        dispatch(masterdataRequest());

        try {
            const response = await remote().getMasterdata();
            if (response.errors) {
                dispatch(masterdataError(response.errors.map((e) => ({
                    code: e.errorCode,
                    fieldName: e.fieldName,
                    message: e.message
                }) as IError)));
            } else {
                dispatch(masterdataReceive(
                    response.payload.allTags, 
                    response.payload.allAlbums ? response.payload.allAlbums : []));
            }
        } catch (ex) {
            dispatch(masterdataError([{ message: ex.message }]));
        }
    };