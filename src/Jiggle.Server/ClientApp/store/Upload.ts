import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface UploadState {
    isLoading: boolean;
    //startDateIndex?: number;
    existingAlbums: Album[];
}

export interface Album {
    id: string;
    name: string;
    level: number;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestUploadInitialDataAction {
    type: 'REQUEST_UPLOAD_INITIAL_DATA';
}

interface ReceiveUploadInitialDataAction {
    type: 'RECEIVE_UPLOAD_INITIAL_DATA';
    existingAlbums: Album[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = 
    RequestUploadInitialDataAction | 
    ReceiveUploadInitialDataAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestUploadInitialData: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        let fetchTask = fetch(`api/Upload/InitialData`)
            .then(response => response.json() as Promise<Album[]>)
            .then(data => {
                dispatch({ type: 'RECEIVE_UPLOAD_INITIAL_DATA', existingAlbums: data });
            });

        addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
        dispatch({ type: 'REQUEST_UPLOAD_INITIAL_DATA' });
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: UploadState = { existingAlbums: [], isLoading: false };

export const reducer: Reducer<WeatherForecastsState> = (state: WeatherForecastsState, incomingAction: Action) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_UPLOAD_INITIAL_DATA':
            return {
                existingAlbums: state.existingAlbums,
                isLoading: true
            };
        case 'RECEIVE_UPLOAD_INITIAL_DATA':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            return {
                existingAlbums: action.existingAlbums,
                isLoading: false
            };
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};
