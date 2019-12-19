import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from './reducers/root.reducer';

@Injectable()
export class AppEffects {

  // Store external dependencies
  private state$ = this.store.select((state) => {
    return state;
  });

  constructor(
    private actions$: Actions,
    private store: Store<State>) { }

  // Store state in local storage after each action
  @Effect({ dispatch: false })
  updateLocalStorage = this.actions$.pipe(
    withLatestFrom(this.state$),
    tap(([action, state]) => {
      localStorage.setItem('store', JSON.stringify(state));
    })
  );
}
