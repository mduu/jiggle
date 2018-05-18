export interface IAssetMetadata {
    title?: string;
    description?: string;
    importedBy: string;
    importedTime: Date;
    takenBy?: string;
    takenTime?: Date;
    gpsCoordinatesX: string;
    gpdCoordinatesY: string;
}