import { IResponseObject } from '..';

export interface IFetcher {
    getJsonAsync<TPayload>(url: string): Promise<IResponseObject<TPayload>>;

    // noinspection TypescriptExplicitMemberType
    // noinspection TsLint
    postAsync<TResult>(url: string, data: object): Promise<TResult>;

    // noinspection TypescriptExplicitMemberType
    // noinspection TsLint
    patchAsync<TResult>(url: string, data: object): Promise<TResult>;
}