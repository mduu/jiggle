import { Tags, TAlbumId } from '.';

export interface IAlbumMetadata {
    id: TAlbumId;
    name: string;
    description?: string;
    createDate: Date;
    createdBy: string;
    updateDate?: Date;
    updatedBy?: string;
    tags?: Tags;
    parentAlbumId?: TAlbumId;
}