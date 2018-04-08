import { IServerError } from './IServerError';

export interface IResponseObject<TPayload> {
    payload: TPayload;
    errors?: IServerError[];
}