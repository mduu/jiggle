export interface IError {
    message: string;
    serverCode?: number;
    code?: string;
    fieldName?: string;
}