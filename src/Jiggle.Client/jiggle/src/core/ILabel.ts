import { IEntity, IAsset } from '.';

export interface ILabel extends IEntity {
    name: string;
    color?: string;

    assets: IAsset[];
}