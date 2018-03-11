import { TTags } from './Tags';
import { TId } from './Id';

export interface IAssetImportOptions {
    // tslint:disable-next-line:no-any
    originalFileContent: any;
    originalFilename: string;
    tags: TTags;
    existingAlbumId: TId;
    newAlbumName: string;
    newAlbumDescription: string;
    parentAlbumId: TId;
    takeTime: Date;
    takenBy: string;
}