import * as React from 'react';
import * as masterdataActions from '../../redux/masterdata/actions';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { getMasterdataState, TAppState } from '../../redux';
import { IError } from '../../core';
import { MainLayout } from './MainLayout';

export type TOwnProps = {
    selectedMainMenuItem?: string;
} & RouteComponentProps<{}>;

interface IStateProps {
    isFetching: boolean;
    isLoaded: boolean;
    errors?: IError[];
}

type TDispatchProps = {
    onMasterdataFetch: () => void;
};

type TProps = TOwnProps & IStateProps & TDispatchProps;

class AppComponent extends React.Component<TProps> {

    componentDidMount() {
        const {onMasterdataFetch} = this.props;

        if (onMasterdataFetch) {
            onMasterdataFetch();
        }
    }

    render() {
        const {isFetching, isLoaded, errors, selectedMainMenuItem} = this.props;

        return (
            <MainLayout
                selectedMainMenuItem={selectedMainMenuItem}
                isFetching={isFetching}
                isLoaded={isLoaded}
                errors={errors}
            />
        );
    }
}

export function mapStateToProps(state: TAppState) {
    const masterdataState = getMasterdataState(state);

    return {
        isFetching: masterdataState.isFetching,
        isLoaded: masterdataState.isLoaded,
        errors: masterdataState.errors
    };
}

const dispatchProps: TDispatchProps = {
    onMasterdataFetch: masterdataActions.masterdataFetch
};

// tslint:disable-next-line:max-line-length
export const App = withRouter<TOwnProps>(connect<IStateProps, TDispatchProps, TOwnProps>(mapStateToProps, dispatchProps)(AppComponent));