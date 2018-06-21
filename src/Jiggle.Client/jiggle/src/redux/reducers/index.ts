import { combineReducers } from 'redux';
import { masterdata, MasterdataState } from '../masterdata/';
import { AlbumsPageState } from '../../pages/Albums/redux';
import * as fromAlbumPage from '../../pages/Albums/redux';

export type TAppState = {
    masterdata: MasterdataState;
    albumPage: AlbumsPageState;
};

export const rootReducer = combineReducers<TAppState>({
    masterdata,
    albumPage: fromAlbumPage.reducer
});