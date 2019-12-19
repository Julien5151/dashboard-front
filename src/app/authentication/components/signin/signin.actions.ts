import { Action } from '@ngrx/store';

// Action identifiers
export const RESTORE_INITIAL_STATE = '[Authentication/Signin] Restore initial state';
export const UPDATE_EMAIL = '[Authentication/Signin] Update email';

// Action classes
export class SigninRestoreInitialState implements Action {
  readonly type = RESTORE_INITIAL_STATE;
}
export class SigninUpdateEmail implements Action {
  readonly type = UPDATE_EMAIL;
  constructor(public payload: string) { }
}

// Action types
export type SigninActions =
  | SigninRestoreInitialState
  | SigninUpdateEmail;
