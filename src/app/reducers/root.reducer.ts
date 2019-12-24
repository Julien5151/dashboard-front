import {
  ActionReducerMap,
  combineReducers
} from '@ngrx/store';
import { appGlobalReducer, AppGlobalState, appGlobalInitialState } from '../app.reducer';
import {
  AuthenticationGlobalState,
  authenticationGlobalInitialState,
  authenticationGlobalReducer
} from '../authentication/components/authentication/authentication.reducer';
import { TicketsGlobalState, ticketsGlobalInitialState, ticketsGlobalReducer } from '../tickets/components/tickets/tickets.reducer';
import { TicketState, ticketInitialState, ticketReducer } from '../tickets/components/ticket/ticket.reducer';
import { LoginState, loginInitialState, loginReducer } from '../authentication/components/login/login.reducer';
import { SignupState, signupInitialState, signupReducer } from '../authentication/components/signup/signup.reducer';

// Application state
export interface State {
  appGlobalState: AppGlobalState;
  authenticationModule: {
    authenticationGlobalState: AuthenticationGlobalState;
    loginState: LoginState;
    signupState: SignupState;
  };
  ticketsModule: {
    ticketsGlobalState: TicketsGlobalState;
    ticketState: TicketState
  };
}

// Application initial state
export const initialState: State = {
  appGlobalState: appGlobalInitialState,
  authenticationModule: {
    authenticationGlobalState: authenticationGlobalInitialState,
    loginState: loginInitialState,
    signupState: signupInitialState
  },
  ticketsModule: {
    ticketsGlobalState: ticketsGlobalInitialState,
    ticketState: ticketInitialState
  }
};

// Application reducer map
export const reducers: ActionReducerMap<State> = {
  appGlobalState: appGlobalReducer,
  authenticationModule: combineReducers({
    authenticationGlobalState: authenticationGlobalReducer,
    loginState: loginReducer,
    signupState: signupReducer
  }),
  ticketsModule: combineReducers({
    ticketsGlobalState: ticketsGlobalReducer,
    ticketState: ticketReducer
  })
};
