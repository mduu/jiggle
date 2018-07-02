import { IRemote, IResponseObject, IMasterdataPayload } from '..';
import { IFetcher } from '../fetching';
import { IUrlManager } from './IUrlManager';

export class RemoteServer implements IRemote {

    private urlManager: IUrlManager; 
    private fetcher: IFetcher;

    constructor(fetcher: IFetcher, urlManager: IUrlManager) {
        if (!fetcher) { throw new Error('Argument "fetcher" is required!');  }
        if (!urlManager) { throw new Error('Argument "urlManager" is required!'); }

        this.fetcher = fetcher;
        this.urlManager = urlManager;
    }

    getMasterdata(): Promise<IResponseObject<IMasterdataPayload>> {
        const url = this.urlManager.getMasterdataUrl();

        return this.fetcher.getJsonAsync(url);
    }
}