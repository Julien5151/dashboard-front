import { Action } from '@ngrx/store';

// Action identifiers
export const RESTORE_INITIAL_STATE = '[Authentication/Signup] Restore initial state';
export const UPDATE_EMAIL = '[Authentication/Signup] Update email';
export const UPDATE_PASSWORD = '[Authentication/Signup] Update password';
export const UPDATE_PASSWORD_CONFIRMATION = '[Authentication/Signup] Update password confirmation';

// Action classes
export class SignupRestoreInitialState implements Action {
  readonly type = RESTORE_INITIAL_STATE;
}
export class SignupUpdateEmail implements Action {
  readonly type = UPDATE_EMAIL;
  constructor(public payload: string) { }
}
export class SignupUpdatePassword implements Action {
  readonly type = UPDATE_PASSWORD;
  constructor(public payload: string) { }
}
export class SignupUpdatePasswordConfirmation implements Action {
  readonly type = UPDATE_PASSWORD_CONFIRMATION;
  constructor(public payload: string) { }
}

// Action types
export type SignupActions =
  | SignupRestoreInitialState
  | SignupUpdateEmail
  | SignupUpdatePassword
  | SignupUpdatePasswordConfirmation;
