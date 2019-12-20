import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers/root.reducer';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {

  // Component used to share property and methods that should be available in all components
  constructor(
    // store property
    protected store: Store<State>
  ) { }

  protected getState(): State {
    let completeState: State;
    const sub = this.store.select(state => state).pipe(take(1)).subscribe((state) => {
      completeState = state;
    });
    sub.unsubscribe();
    return completeState;
  }


}
