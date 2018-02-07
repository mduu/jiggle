import { createStore } from 'redux';

// --- State ---
export interface AppStoreState {
    selectedMainMenuItem: string;
}

// --- Actions ----
export const MAINMENU_SELECTITEM = 'MAINMENU_SELECTITEM';
export type MAINMENU_SELECTITEM = typeof MAINMENU_SELECTITEM;

// tslint:disable-next-line:class-name
export interface MainMenu_SelectItem {
    type: MAINMENU_SELECTITEM;
    selectedMainMenuItem: string;
}

// MainMenu Actions Type
export type MainMenuAction = MainMenu_SelectItem /*| DecrementEnthusiasm */;

// --- Action Factories ---
export function mainMenuSelectItem(selectedMainMenuItem: string): MainMenu_SelectItem {
    return {
        type: MAINMENU_SELECTITEM,
        selectedMainMenuItem: selectedMainMenuItem
    };
}

// --- Reducers ---
export function mainMenu(state: AppStoreState, action: MainMenuAction): AppStoreState {
    switch (action.type) {
        case MAINMENU_SELECTITEM:
            return { ...state, selectedMainMenuItem: action.selectedMainMenuItem };
        default:
            return state;
    }
}

// --- Store ---
export const appStore = createStore<AppStoreState>(mainMenu, {
    selectedMainMenuItem: 'home'
});