import { IRemote } from '..';
import { RestFetcher } from '../fetching';
import { RemoteServer } from './RemoteServer';
import { UrlManager } from './UrlManager';
import { IRemoteServerConfiguration } from '../../configuration';

export function RemoteServerFactory(): IRemote {

    const config = {
        remoteUrl: 'http://localhost:5001/api/v1'
    } as IRemoteServerConfiguration;

    return new RemoteServer(
        new RestFetcher(), 
        new UrlManager(config));
}