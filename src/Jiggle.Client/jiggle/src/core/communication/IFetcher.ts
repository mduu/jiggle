import { IResponseObject } from '.';

export interface IFetcher {
    getJson<TPayload>(url: string): Promise<IResponseObject<TPayload>>;
    
    postData<TPayloadRequest, TPayloadResponse>(url: string, payload: TPayloadRequest): 
        Promise<IResponseObject<TPayloadResponse>;
}