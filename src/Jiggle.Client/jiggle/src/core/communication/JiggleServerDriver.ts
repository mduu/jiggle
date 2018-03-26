import { 
    RemoteBase, 
    IUrlManager, 
    IFetcher,
    IResponseObject
} from '.';

export class JiggleServer extends RemoteBase {
    createUrlManager(): IUrlManager {
        return new JiggleUrlManager();
    }

    createFetcher() {
        return new JiggleFetcher();
    }
}

export class JiggleUrlManager implements IUrlManager {
    
}

export class JiggleFetcher implements IFetcher {
    getJson<TPayload>(url: string): Promise<IResponseObject<TPayload>> {
        throw new Error('Method not implemented.');
    }

    postData<TPayloadRequest, TPayloadResponse>(url: string, payload: TPayloadRequest): 
        Promise<IResponseObject<TPayloadResponse>> {
        throw new Error('Method not implemented.');
    }
}