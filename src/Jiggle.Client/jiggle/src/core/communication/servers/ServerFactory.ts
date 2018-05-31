import { IRemote } from '..';
import { IServerFactory, RemoteServerFactory } from '.';

export class ServerFactory implements IServerFactory {
    createServer(): IRemote {
        // return InMemoryServerFactory();
        return RemoteServerFactory();
    }
}