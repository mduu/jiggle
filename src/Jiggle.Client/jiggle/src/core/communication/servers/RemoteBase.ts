import { IRemote, IUrlManager, IResponseObject, IMasterdataPayload } from '..';
import { IFetcher } from '../fetching';

export abstract class RemoteBase implements IRemote {

    protected urlManager: IUrlManager; 
    protected fetcher: IFetcher;

    constructor() {
        this.urlManager = this.createUrlManager();
        this.fetcher = this.createFetcher();
    }

    abstract createUrlManager(): IUrlManager;
    abstract createFetcher(): IFetcher;

    getMasterdata(): Promise<IResponseObject<IMasterdataPayload>> {
        throw new Error('Method not implemented.');
    }
}