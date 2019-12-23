import { Action } from '@ngrx/store';

// Action identifiers
export const RESTORE_INITIAL_STATE = '[Authentication/Signin] Restore initial state';
export const UPDATE_EMAIL = '[Authentication/Signin] Update email';
export const UPDATE_PASSWORD = '[Authentication/Signin] Update password';
export const UPDATE_PASSWORD_CONFIRMATION = '[Authentication/Signin] Update password confirmation';

// Action classes
export class SigninRestoreInitialState implements Action {
  readonly type = RESTORE_INITIAL_STATE;
}
export class SigninUpdateEmail implements Action {
  readonly type = UPDATE_EMAIL;
  constructor(public payload: string) { }
}
export class SigninUpdatePassword implements Action {
  readonly type = UPDATE_PASSWORD;
  constructor(public payload: string) { }
}
export class SigninUpdatePasswordConfirmation implements Action {
  readonly type = UPDATE_PASSWORD_CONFIRMATION;
  constructor(public payload: string) { }
}

// Action types
export type SigninActions =
  | SigninRestoreInitialState
  | SigninUpdateEmail
  | SigninUpdatePassword
  | SigninUpdatePasswordConfirmation;
