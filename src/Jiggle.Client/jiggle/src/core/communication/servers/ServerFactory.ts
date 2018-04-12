import { IRemote } from '..';
import { InMemoryServerFactory } from '.';

export interface IServerFactory {
    createServer(): IRemote;
}

export class ServerFactory implements IServerFactory {
    createServer(): IRemote {
        return InMemoryServerFactory();
    }
}