import { RemoteBase } from '.';
import { IUrlManager } from '..';
import { RestFetcher } from '../fetching';

export class JiggleServer extends RemoteBase {
    createUrlManager(): IUrlManager {
        return new JiggleUrlManager();
    }

    createFetcher() {
        return new RestFetcher();
    }
}

export class JiggleUrlManager implements IUrlManager {
}