import { Action } from '@ngrx/store';
import { TicketMode } from 'src/app/shared/enums/ticket-mode.enum';
import { Ticket } from 'src/app/shared/models/ticket.model';

// Action identifiers
export const RESTORE_INITIAL_STATE = '[Ticket] Restore initial state';
export const UPDATE_MODE = '[Ticket] Update mode';
export const UPDATE_DATA = '[Ticket] Update data';

// Action classes
export class TicketRestoreInitialState implements Action {
  readonly type = RESTORE_INITIAL_STATE;
}
export class TicketUpdateMode implements Action {
  readonly type = UPDATE_MODE;
  constructor(public payload: TicketMode) { }
}
export class TicketUpdateData implements Action {
  readonly type = UPDATE_DATA;
  constructor(public payload: Ticket) { }
}

// Action types
export type TicketActions =
  | TicketRestoreInitialState
  | TicketUpdateMode
  | TicketUpdateData;
