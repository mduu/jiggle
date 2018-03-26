import { IServerError } from './IServerError';

export interface IResponseObject<TPayload> {
    // tslint:disable-next-line:no-any
    payload: TPayload;
    errors?: IServerError[];
}