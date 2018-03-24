import { compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createStore } from 'redux';
import { TAppState, rootReducer } from '.';

// Try to get the REDUX DEV TOOLS instance
const tryGetDevTools = () => {
    // tslint:disable-next-line:no-any
    if (typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      // tslint:disable-next-line:no-any
      return (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      });
    }
   
    return undefined;
  };

// Build a new Redux compose function eighter using the REDUX DEV TOOLS ot the original compose
const composeEnhancers = tryGetDevTools() || compose;
   
// Create an store enhancer with REDUX DEV TOOLS and REDUX-THUNK
const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware)
);

// Build the central redux store (global state)
export const store = createStore<TAppState>(
    rootReducer,
    enhancer
);