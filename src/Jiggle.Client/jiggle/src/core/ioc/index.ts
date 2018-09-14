import { IRemote } from '../communication';
import { SERVICE_IDENTIFIERS } from './serviceIdentifiers';
import { container } from '../../index';

export { SERVICE_IDENTIFIERS } from './serviceIdentifiers';
export { initializeJiggleContainer } from './registry';

export const remote = (): IRemote => container.get<IRemote>(SERVICE_IDENTIFIERS.IREMOTE);