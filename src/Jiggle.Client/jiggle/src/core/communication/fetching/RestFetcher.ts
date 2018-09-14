import { IResponseObject } from '..';
import { IFetcher } from '.';
import { injectable } from 'inversify';

@injectable()
export class RestFetcher implements IFetcher {
    private logToConsole: boolean = true;

    public async getJsonAsync<TPayload>(url: string): Promise<IResponseObject<TPayload>> {
        if (this.logToConsole) {
            console.debug(`Fetch JSON from URL [${url}]`);
        }

        // noinspection SpellCheckingInspection
        return await
            fetch(url, {
                cache: 'no-cache',
                mode: 'cors',
                headers: this.createCustomHeaders()
            })
                .then((response) => response.ok ? response.json() : Promise.reject(response))
                .catch((reason) => Promise.reject(reason));
    }

    // noinspection TsLint
    public async postAsync<TResult>(url: string, data: object): Promise<TResult> {
        if (this.logToConsole) {
            console.debug(`Post JSON from URL [${url}]`);
        }

        return await this.sendToServerAsync<TResult>('POST', url, data);
    }

    // noinspection TsLint
    public async patchAsync<TResult>(url: string, data: object): Promise<TResult> {
        if (this.logToConsole) {
            console.debug(`Patch JSON from URL [${url}]`);
        }

        return await this.sendToServerAsync<TResult>('PATCH', url, data);
    }

    private async sendToServerAsync<TResult>(method: string, url: string, data: object): Promise<TResult> {

        return await
            fetch(url, {
                body: JSON.stringify(data),
                cache: 'no-cache',
                headers: this.createCustomHeaders(),
                method,
                mode: 'cors',
                redirect: 'follow',
                referrer: 'no-referrer'
            })
                .then((response) => response.ok ? response.json() : Promise.reject(response))
                .catch((reason) => Promise.reject(reason));
    }

    private createCustomHeaders(): Headers {

        // NOTE: We must make sure Internet Explorer does not cache the fetch requests.
        const headers = new Headers();
        headers.append('pragma', 'no-cache');
        headers.append('cache-control', 'no-cache');
        headers.append('content-type', 'application/json');

        return headers;
    }
}