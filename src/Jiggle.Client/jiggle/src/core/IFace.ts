import { IEntity, IAsset } from '.';

export interface IFace extends IEntity {
    shortname: string;
    lastname?: string;
    firstname?: string;

    assets: IAsset[];
}