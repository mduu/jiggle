import { IResponseObject, IMasterdataPayload } from '.';

export interface IRemote {
    getMasterdata(): Promise<IResponseObject<IMasterdataPayload>>;
}