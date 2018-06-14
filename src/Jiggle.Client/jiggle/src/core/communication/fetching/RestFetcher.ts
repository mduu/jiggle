import { IResponseObject } from '..';
import { IFetcher } from '.';

export class RestFetcher implements IFetcher {
    getJson<TPayload>(url: string): Promise<IResponseObject<TPayload>> {
        return fetch(url)
        .then(
            response => response.json(),
            error => {
                console.log('An error occurred.', error);
                return Promise.resolve({
                    errors: [ { message: error.message} ]
                } as IResponseObject<TPayload>);
            }
        )
        .then(json =>
            Promise.resolve(json as IResponseObject<TPayload>)
        );
    }

    postData<TPayloadRequest, TPayloadResponse>(url: string, payload: TPayloadRequest): 
        Promise<IResponseObject<TPayloadResponse>> {
        throw new Error('Method not implemented.');
    }
}