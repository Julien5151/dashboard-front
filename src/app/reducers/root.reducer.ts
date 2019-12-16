import {
  ActionReducerMap,
  MetaReducer,
  combineReducers
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { appGlobalReducer, AppGlobalState, appGlobalInitialState } from '../app.reducer';
import {
  AuthenticationGlobalState,
  authenticationGlobalInitialState,
  authenticationGlobalReducer
} from '../authentication/components/authentication/authentication.reducer';
import { TicketsGlobalState, ticketsGlobalInitialState, ticketsGlobalReducer } from '../tickets/components/tickets/tickets.reducer';

// Application state
export interface State {
  appGlobalState: AppGlobalState;
  authenticationModule: {
    authenticationGlobalState: AuthenticationGlobalState;
  };
  ticketsModule: {
    ticketsGlobalState: TicketsGlobalState;
  };
}

// Application initial state
export const initialState: State = {
  appGlobalState: appGlobalInitialState,
  authenticationModule: {
    authenticationGlobalState: authenticationGlobalInitialState
  },
  ticketsModule: {
    ticketsGlobalState: ticketsGlobalInitialState
  }
};

// Application reducer map
export const reducers: ActionReducerMap<State> = {
  appGlobalState: appGlobalReducer,
  authenticationModule: combineReducers({
    authenticationGlobalState: authenticationGlobalReducer
  }),
  ticketsModule: combineReducers({
    ticketsGlobalState: ticketsGlobalReducer
  })
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
