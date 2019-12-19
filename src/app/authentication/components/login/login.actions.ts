import { Action } from '@ngrx/store';

// Action identifiers
export const RESTORE_INITIAL_STATE = '[Authentication/Login] Restore initial state';
export const UPDATE_EMAIL = '[Authentication/Login] Update email';

// Action classes
export class LoginRestoreInitialState implements Action {
  readonly type = RESTORE_INITIAL_STATE;
}
export class LoginUpdateEmail implements Action {
  readonly type = UPDATE_EMAIL;
  constructor(public payload: string) { }
}

// Action types
export type LoginActions =
  | LoginRestoreInitialState
  | LoginUpdateEmail;
