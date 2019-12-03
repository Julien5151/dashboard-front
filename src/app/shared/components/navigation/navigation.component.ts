import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AUTHENTICATION_PAGE_ROUTE_ARRAY } from 'src/app/app-routing.module';
import { State } from 'src/app/reducers/root.reducer';
import { Store } from '@ngrx/store';
import * as AppGlobalActions from 'src/app/app.actions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private router: Router,
    private store: Store<State>
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.store.dispatch(new AppGlobalActions.AppGlobalUpdateIsLoading(true));
  }

  onSignIn() {
    this.store.dispatch(new AppGlobalActions.AppGlobalUpdateIsLoading(false));
  }

}
