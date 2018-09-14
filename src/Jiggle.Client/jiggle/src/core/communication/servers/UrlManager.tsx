import { IUrlManager } from './IUrlManager';
import { inject, injectable } from 'inversify';
import { ISettings } from '../../settings';
import { SERVICE_IDENTIFIERS } from '../../ioc';

@injectable()
export class UrlManager implements IUrlManager {
    constructor(@inject(SERVICE_IDENTIFIERS.ISETTINGS) private settings: ISettings) {
    }

    getMasterdataUrl = (): string => (this.combineUrl('masterdata'));

    private combineUrl(...urlSegments: string[]): string {
        return [ this.settings.backendServerUrl, ...urlSegments].join('/');
    }

}