import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { appGlobalReducer, AppGlobalState, appGlobalInitialState } from '../app.reducer';

// Application state
export interface State {
  appGlobalState: AppGlobalState;
}

// Application initial state
export const initialState: State = {
  appGlobalState: appGlobalInitialState
};

// Application reducer map
export const reducers: ActionReducerMap<State> = {
  appGlobalState: appGlobalReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
