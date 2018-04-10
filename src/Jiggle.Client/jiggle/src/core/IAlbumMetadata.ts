import { Tags } from '.';

export interface IAlbumMetadata {
    id: string;
    caption: string;
    description?: string;
    createDate: Date;
    updateDate?: Date;
    tags?: Tags;
}