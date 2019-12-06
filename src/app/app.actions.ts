import { Action } from '@ngrx/store';

// Action identifiers
export const RESTORE_INITIAL_STATE = '[Global] Restore initial state';
export const UPDATE_IS_LOADING = '[Global] Update is loading';

// Action classes
export class AppGlobalRestoreInitialState implements Action {
    readonly type = RESTORE_INITIAL_STATE;
}
export class AppGlobalUpdateIsLoading implements Action {
    readonly type = UPDATE_IS_LOADING;
    constructor(public payload: boolean) {}
}

// Action types
export type AppGlobalActions =
| AppGlobalRestoreInitialState
| AppGlobalUpdateIsLoading;
