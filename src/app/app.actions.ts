import { Action } from '@ngrx/store';
import { LoginResponse } from './shared/interfaces/LoginResponse.interface';

// Action identifiers
export const RESTORE_INITIAL_STATE = '[Global] Restore initial state';
export const UPDATE_IS_LOADING = '[Global] Update is loading';
export const UPDATE_USER_DATA = '[Global] Update user data';

// Action classes
export class AppGlobalRestoreInitialState implements Action {
  readonly type = RESTORE_INITIAL_STATE;
}
export class AppGlobalUpdateIsLoading implements Action {
  readonly type = UPDATE_IS_LOADING;
  constructor(public payload: boolean) { }
}
export class AppGlobalUpdateUserData implements Action {
  readonly type = UPDATE_USER_DATA;
  constructor(public payload: LoginResponse) { }
}

// Action types
export type AppGlobalActions =
  | AppGlobalRestoreInitialState
  | AppGlobalUpdateIsLoading
  | AppGlobalUpdateUserData;
