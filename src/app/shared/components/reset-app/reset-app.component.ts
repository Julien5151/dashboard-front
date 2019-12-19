import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/reducers/root.reducer';
import { Store } from '@ngrx/store';
import * as MetareducerActions from 'src/app/reducers/root.metareducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-app',
  templateUrl: './reset-app.component.html',
  styleUrls: ['./reset-app.component.scss']
})
export class ResetAppComponent implements OnInit {

  constructor(
    private store: Store<State>,
    private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    // Reset application state
    this.store.dispatch(new MetareducerActions.AppRestoreInitialState());
    // Navigate to root of the application
    this.router.navigate(['']);
  }

}
