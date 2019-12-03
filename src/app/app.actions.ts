import { Action } from '@ngrx/store';

// Action identifiers
export const RESTORE_INITIAL_STATE = 'APP/GLOBAL/RESTORE_INITIAL_STATE';
export const UPDATE_IS_LOADING = 'APP/GLOBAL/UPDATE_IS_LOADING';

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
