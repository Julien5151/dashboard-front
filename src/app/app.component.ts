import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers/root.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Internal dependencies
  public isLoading$ = this.store.select((state) => {
    return state.appGlobalState.isLoading;
  });

  constructor(private store: Store<State>) {}
}
