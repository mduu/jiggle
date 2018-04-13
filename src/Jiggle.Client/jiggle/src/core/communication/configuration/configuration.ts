export interface IGeneralConfiguration {
    instanceName: string;
    instanceTitle?: string;
    instanceDescription?: string;
}

export interface IRemoteServerConfiguration {
    remoteUrl: string;
}

export interface IConfiguration extends 
    IGeneralConfiguration,
    IRemoteServerConfiguration {
}