import * as TicketActions from 'src/app/tickets/components/ticket/ticket.actions';
import { TicketMode } from 'src/app/shared/enums/ticket-mode.enum';
import { Ticket } from 'src/app/shared/models/ticket.model';

// Component state
export interface TicketState {
  mode: TicketMode;
  data: Ticket;
}

// Component initial state
export const ticketInitialState: TicketState = {
  mode: TicketMode.new,
  data: null
};

// Component reducer
export function ticketReducer(
  state: TicketState = ticketInitialState,
  action: TicketActions.TicketActions): TicketState {
  switch (action.type) {
    case TicketActions.RESTORE_INITIAL_STATE:
      return ticketInitialState;
    case TicketActions.UPDATE_MODE:
      return updateMode(state, action);
    case TicketActions.UPDATE_DATA:
      return updateData(state, action);
    default:
      return state;
  }
}

function updateMode(state: TicketState, action: TicketActions.TicketUpdateMode): TicketState {
  return {
    ...state,
    mode: action.payload
  };
}

function updateData(state: TicketState, action: TicketActions.TicketUpdateData): TicketState {
  return {
    ...state,
    data: action.payload
  };
}

