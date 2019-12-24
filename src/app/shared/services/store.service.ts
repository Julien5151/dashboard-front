import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers/root.reducer';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StoreService {

  constructor(private store: Store<State>) { }

  getState(): State {
    let completeState: State;
    const sub = this.store.select(state => state).pipe(take(1)).subscribe((state) => {
      completeState = state;
    });
    sub.unsubscribe();
    return completeState;
  }
}
