import { IRemote } from '..';
import { InMemoryServer } from './InMemoryServer';

export function InMemoryServerFactory(): IRemote {
    return new InMemoryServer();
}