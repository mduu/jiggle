import { Tags, IAlbumMetadata, IFace, ILabel } from '.';

export interface IAsset {
    title?: string;
    description?: string;
    importedBy: string;
    importedTime: Date;
    takenBy?: string;
    takenTime?: Date;
    gpsCoordinatesX: string;
    gpdCoordinatesY: string;
    rating: number;
    metadata: string;
    
    tags: Tags;
    albums: IAlbumMetadata[];
    faces: IFace[];
    labels: ILabel[];
}