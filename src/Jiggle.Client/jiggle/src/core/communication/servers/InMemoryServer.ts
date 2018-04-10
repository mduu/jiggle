import { IRemote, IResponseObject, IMasterdataPayload } from '..';
import { IAlbumMetadata } from '../..';

export class InMemoryServer implements IRemote {

    private tags: string[] = [ 'landscape', 'animal' ];

    getMasterdata(): Promise<IResponseObject<IMasterdataPayload>> {

        const responseObject: IResponseObject<IMasterdataPayload> = {
             payload: {
                tags: this.tags,
                albums: [ this.createMyFirstTestAlbumMetadata()]
            }
        };

        return Promise.resolve(responseObject);
    }

    private createMyFirstTestAlbumMetadata(): IAlbumMetadata {
        return {
            id: '12345-45678-435345',
            caption: 'My first album',
            createDate: new Date(2017, 12, 14),
            description: 'A first in-memory test-album'
        };
    }
}