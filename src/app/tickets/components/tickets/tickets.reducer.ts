import * as TicketsGlobalActions from 'src/app/tickets/components/tickets/tickets.actions';

// Component state
export interface TicketsGlobalState {
  isOpened: boolean;
}

// Component initial state
export const ticketsGlobalInitialState: TicketsGlobalState = {
  isOpened: false
};

// Component reducer
export function ticketsGlobalReducer(
  state: TicketsGlobalState = ticketsGlobalInitialState,
  action: TicketsGlobalActions.TicketsGlobalActions): TicketsGlobalState {
  switch (action.type) {
    case TicketsGlobalActions.RESTORE_INITIAL_STATE:
      return ticketsGlobalInitialState;
    case TicketsGlobalActions.UPDATE_IS_OPENED:
      return updateIsOpened(state, action);
    default:
      return state;
  }
}

function updateIsOpened(state: TicketsGlobalState, action: TicketsGlobalActions.TicketsGlobalUpdateIsOpened): TicketsGlobalState {
  return {
    ...state,
    isOpened: action.payload
  };
}
