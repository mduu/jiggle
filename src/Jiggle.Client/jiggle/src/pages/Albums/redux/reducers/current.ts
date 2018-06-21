import { AlbumsPageCurrentState, AlbumPageAction, CHANGE_CURRENT_ALBUM } from '..';

const initial: AlbumsPageCurrentState = {};

export function currentReducer(state: AlbumsPageCurrentState = initial, action: AlbumPageAction): AlbumsPageCurrentState {

    switch (action.type) {

        case CHANGE_CURRENT_ALBUM:
            return {
                ...state,
                currentAlbum: action.currentAlbum
            };

    }

    return state;
}