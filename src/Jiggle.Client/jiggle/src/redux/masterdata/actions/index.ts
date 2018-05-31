import { TDispatchableReturn } from '../../types';
import { ServerFactory } from '../../../core/communication/servers';
import { MasterdataAction } from '..';
import { masterdataRequest, masterdataError, masterdataReceive } from './factories';
import { IError } from '../../../core';

export * from './types';

export const masterdataFetch = (): TDispatchableReturn<MasterdataAction> => 
    async (dispatch, getState) => {

        const state = getState();

        if (state.masterdata.isFetching) {
            return Promise.resolve();
        }

        dispatch(masterdataRequest());

        const server = new ServerFactory().createServer();

        try {
            const response = await server.getMasterdata();
            if (response.errors) {
                dispatch(masterdataError(response.errors.map((e) => ({
                    code: e.errorCode,
                    fieldName: e.fieldName,
                    message: e.message
                }) as IError)));
            } else {
                dispatch(masterdataReceive(
                    response.payload.tags, 
                    response.payload.albums ? response.payload.albums : []));
            }
        } catch (ex) {
            dispatch(masterdataError([{ message: ex.message }]));
        }
    };