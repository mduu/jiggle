import { IRemote } from '..';
import { RestFetcher } from '../fetching';
import { RemoteServer } from './RemoteServer';
import { UrlManager } from './UrlManager';

export function RemoteServerFactory(): IRemote {
    return new RemoteServer(new RestFetcher(), new UrlManager());
}