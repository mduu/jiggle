import { TAppState } from '.';

export type TDispatchableReturn<TAction> = (
    dispatch: (args: TAction) => void, 
    getState: () => TAppState) 
    => Promise<TAction | undefined | void>;
