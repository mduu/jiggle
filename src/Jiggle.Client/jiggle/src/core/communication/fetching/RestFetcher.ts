import { IResponseObject } from '..';
import { IFetcher } from '.';

export class RestFetcher implements IFetcher {
    private logToConsole: boolean = true;

    getJsonAsync<TPayload>(url: string): Promise<IResponseObject<TPayload>> {
        if (this.logToConsole) {
            console.debug(`Fetch JSON from URL [${url}]`);
        }

        // noinspection TsLint
        return fetch(url,
            {
                cache: 'no-cache',
                headers: this.createCustomHeaders()
            })
            .then(
                response => response.json(),
                error => {
                    console.log('An error occurred.', error);
                    return Promise.resolve({
                        errors: [{message: error.message}]
                    } as IResponseObject<TPayload>);
                }
            )
            .then(json =>
                Promise.resolve(json as IResponseObject<TPayload>)
            );
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

    private async sendToServerAsync<TResult>(method: string, url: string, data: any): Promise<TResult> {

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