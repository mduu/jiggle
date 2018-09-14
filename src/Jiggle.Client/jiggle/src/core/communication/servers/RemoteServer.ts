import { inject, injectable } from 'inversify';
import { SERVICE_IDENTIFIERS } from '../../ioc';import { IRemote, IResponseObject, IMasterdataPayload } from '..';
import { IFetcher } from '../fetching';
import { IUrlManager } from './IUrlManager';


@injectable()
export class RemoteServer implements IRemote {

    constructor(
        @inject(SERVICE_IDENTIFIERS.IFETCHER) private fetcher: IFetcher,
        @inject(SERVICE_IDENTIFIERS.IURLMANAGER) private urlManager: IUrlManager) {
    }

    getMasterdata(): Promise<IResponseObject<IMasterdataPayload>> {
        const url = this.urlManager.getMasterdataUrl();
        return this.fetcher.getJsonAsync(url);
    }
}