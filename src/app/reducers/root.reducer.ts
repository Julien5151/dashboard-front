import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { appGlobalReducer, AppGlobalVM } from '../app.reducer';

export interface State {
  appGlobalVM: AppGlobalVM;
}

export const reducers: ActionReducerMap<State> = {
  appGlobalVM: appGlobalReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
