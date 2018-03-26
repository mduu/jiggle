import { 
    RemoteBase, 
    IUrlManager, 
    IFetcher, 
    IResponseObject
} from '.';

export class InMemoryServer extends RemoteBase {
    createUrlManager(): IUrlManager {
        return new InMemoryUrlManager();
    }
    createFetcher(): IFetcher {
        return new InMemoryFetcher();
    }
}

export class InMemoryUrlManager implements IUrlManager {
    
}

export class InMemoryFetcher implements IFetcher {
    getJson<TPayload>(url: string): Promise<IResponseObject<TPayload>> {
        throw new Error('Method not implemented.');
    }

    postData<TPayloadRequest, TPayloadResponse>(url: string, payload: TPayloadRequest): 
        Promise<IResponseObject<TPayloadResponse>> {
        throw new Error('Method not implemented.');
    }
}