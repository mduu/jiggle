import { IUrlManager } from './IUrlManager';
import { IRemoteServerConfiguration } from '../../configuration';

export class UrlManager implements IUrlManager {

    remoteServerConfiguration: IRemoteServerConfiguration;

    constructor(remoteServerConfiguration: IRemoteServerConfiguration) {
        if (!remoteServerConfiguration) { throw new Error('Parameter "remoteServerConfiguration" is required!'); }

        this.remoteServerConfiguration = remoteServerConfiguration;
    }

    getMasterdataUrl = (): string => (this.combineUrl('masterdata'));

    private combineUrl(...urlSegments: string[]): string {
        return [ this.remoteServerConfiguration.remoteUrl, ...urlSegments].join('/');
    }

}