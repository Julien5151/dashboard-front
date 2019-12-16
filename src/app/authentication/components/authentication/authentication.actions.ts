import { Action } from '@ngrx/store';

// Action identifiers
export const RESTORE_INITIAL_STATE = '[Authentication] Restore initial state';
export const UPDATE_IS_OPENED = '[Authentication] Update is opened';

// Action classes
export class AuthenticationGlobalRestoreInitialState implements Action {
  readonly type = RESTORE_INITIAL_STATE;
}
export class AuthenticationGlobalUpdateIsOpened implements Action {
  readonly type = UPDATE_IS_OPENED;
  constructor(public payload: boolean) { }
}

// Action types
export type AuthenticationGlobalActions =
  | AuthenticationGlobalRestoreInitialState
  | AuthenticationGlobalUpdateIsOpened;
