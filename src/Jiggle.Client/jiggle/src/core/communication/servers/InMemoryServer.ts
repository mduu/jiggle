import { IRemote, IResponseObject, IMasterdataPayload } from '..';

export class InMemoryServer implements IRemote {
    getMasterdata(): Promise<IResponseObject<IMasterdataPayload>> {
        throw new Error('Method not implemented.');
    }
}