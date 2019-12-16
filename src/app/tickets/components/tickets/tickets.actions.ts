import { Action } from '@ngrx/store';

// Action identifiers
export const RESTORE_INITIAL_STATE = '[Tickets] Restore initial state';
export const UPDATE_IS_OPENED = '[Tickets] Update is opened';

// Action classes
export class TicketsGlobalRestoreInitialState implements Action {
  readonly type = RESTORE_INITIAL_STATE;
}
export class TicketsGlobalUpdateIsOpened implements Action {
  readonly type = UPDATE_IS_OPENED;
  constructor(public payload: boolean) { }
}

// Action types
export type TicketsGlobalActions =
  | TicketsGlobalRestoreInitialState
  | TicketsGlobalUpdateIsOpened;
