import { IRemote } from '..';

export interface IServerFactory {
    createServer(): IRemote;
}