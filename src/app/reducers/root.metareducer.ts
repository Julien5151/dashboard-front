import { ActionReducer, MetaReducer } from '@ngrx/store';
import { initialState, State } from './root.reducer';
import { environment } from 'src/environments/environment';
import { Action } from '@ngrx/store';

// Ngrx librairy actions
export const NGRX_INIT = '@ngrx/store/init';
export const NGRX_EFFECTS_INIT = '@ngrx/effects/init';

// Custom metareducer actions
export const RESTORE_APP_INITIAL_STATE = '[App] Restore initial state';
// Class
export class AppRestoreInitialState implements Action {
  readonly type = RESTORE_APP_INITIAL_STATE;
}

// Load state from local storage metareducer
export function loadState(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (action.type === NGRX_INIT) {
      // Check is there already is a state in local storage
      const initialLoadedState = localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store')) : initialState;
      // If so provide it to the global reducer, otherwise provide initial state
      return reducer(initialLoadedState, action);
    } else {
      return reducer(state, action);
    }
  };
}

// Restore application initial state
export function restoreAppInitialState(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (action.type === RESTORE_APP_INITIAL_STATE) {
      return reducer(initialState, action);
    } else {
      return reducer(state, action);
    }
  };
}

// Metareducers export
export const metaReducers: MetaReducer<State>[] = !environment.production ?
  [
    restoreAppInitialState,
    loadState
  ] :
  [loadState];
