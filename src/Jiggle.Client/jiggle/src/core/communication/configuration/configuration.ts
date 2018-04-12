export interface IConfiguration extends 
    IGeneralConfiguration,
    IRemoteServerConfiguration {
}

export interface IGeneralConfiguration {
    instanceName: string;
    instanceTitle?: string;
    instanceDescription?: string;
}

export interface IRemoteServerConfiguration {
    remoteUrl: string;
}