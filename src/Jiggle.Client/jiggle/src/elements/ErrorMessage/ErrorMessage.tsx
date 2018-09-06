import * as React from 'react';
import { Snackbar } from '@material-ui/core';
import { IError } from '../../core';

type TStyles = {
    errorMessageRoot: string;
};

const styles: TStyles = require('./ErrorMessage.less');

export interface IProps {
    error: IError;
}

const formatErrorMessage = (error: IError): string => {
    let result = error.message;

    let msgFragments = [];
    if (error.code) {
        msgFragments.push('Code: ' + error.code);
    }
    if (error.serverCode) {
        msgFragments.push('Server-Code: ' + error.serverCode);
    }
    if (error.fieldName) {
        msgFragments.push('Fieldname: ' + error.fieldName);
    }

    if (msgFragments.length > 0) {
        result = result + '(' + msgFragments.join(', ') + ')';
    }

    return result;
};

export const ErrorMessage = ({error}: IProps) => (
    <Snackbar
        className={styles.errorMessageRoot}
        open={true}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        ContentProps={{
            'aria-describedby': 'message-id',
        }}
        message={
            <span id="message-id">
                    {formatErrorMessage(error)}
                </span>}
    />
);