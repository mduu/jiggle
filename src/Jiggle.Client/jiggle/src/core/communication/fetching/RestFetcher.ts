import { IResponseObject } from '..';
import { IFetcher } from '.';

export class RestFetcher implements IFetcher {
    getJson<TPayload>(url: string): Promise<IResponseObject<TPayload>> {
        throw new Error('Method not implemented.');
    }

    postData<TPayloadRequest, TPayloadResponse>(url: string, payload: TPayloadRequest): 
        Promise<IResponseObject<TPayloadResponse>> {
        throw new Error('Method not implemented.');
    }
}