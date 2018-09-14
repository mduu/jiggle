import { Container, ContainerModule, interfaces } from 'inversify';
import { ISettings, settings } from '../settings';
import { SERVICE_IDENTIFIERS } from './serviceIdentifiers';
import { IFetcher, RestFetcher } from '../communication/fetching';
import { IUrlManager } from '../communication/servers';
import { UrlManager } from '../communication/servers';
import { IRemote } from '../communication';
import { RemoteServer } from '../communication/servers';

const coreModule = () => new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind<ISettings>(SERVICE_IDENTIFIERS.ISETTINGS).toConstantValue(settings);
});

const remoteServerModule = () => new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind<IFetcher>(SERVICE_IDENTIFIERS.IFETCHER).to(RestFetcher).inSingletonScope();
    bind<IUrlManager>(SERVICE_IDENTIFIERS.IURLMANAGER).to(UrlManager).inSingletonScope();
    bind<IRemote>(SERVICE_IDENTIFIERS.IREMOTE).to(RemoteServer).inSingletonScope();
});

export const initializeJiggleContainer = (): Container => {
    const container = new Container();
    container.load(coreModule());
    container.load(remoteServerModule());
    return container;
};