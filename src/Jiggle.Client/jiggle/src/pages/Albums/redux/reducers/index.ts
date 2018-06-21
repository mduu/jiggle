import { combineReducers } from 'redux';
import { AlbumsPageState } from '../state';
import { currentReducer } from './current';

export const reducer = combineReducers<AlbumsPageState>({
    current: currentReducer
});