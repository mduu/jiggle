import { ISettings } from './ISettings';

export { ISettings } from './ISettings';

export const DEFAULT_SERVER_BASEURL = 'http://localhost:5001/api/v1';

let settings: ISettings = {
    backendServerUrl: DEFAULT_SERVER_BASEURL,
    instanceName: 'Test Jiggle',
};

if (typeof window !== 'undefined') {
    // noinspection TsLint
    settings = {
        ...settings,
        ...(window as any).jiggleConfig as ISettings
    };
}

export { settings };