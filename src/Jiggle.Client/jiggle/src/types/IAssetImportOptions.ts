import { Tags, Id } from '.';

export interface IAssetImportOptions {
    // tslint:disable-next-line:no-any
    originalFileContent: any;
    originalFilename: string;
    tags: Tags;
    existingAlbumId: Id;
    newAlbumName: string;
    newAlbumDescription: string;
    parentAlbumId: Id;
    takeTime: Date;
    takenBy: string;
}