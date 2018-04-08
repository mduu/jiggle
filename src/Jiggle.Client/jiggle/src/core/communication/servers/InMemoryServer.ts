import { RemoteBase } from '.';
import { IUrlManager } from '..';
import { IFetcher, InMemoryFetcher } from '../fetching';

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