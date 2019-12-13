import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { State } from 'src/app/reducers/root.reducer';
import { Store } from '@ngrx/store';
import * as AppGlobalActions from 'src/app/app.actions';
import { AUTHENTICATION_LOGIN_FULLPATH_ROUTE_ARRAY,
  AUTHENTICATION_SIGNIN_FULLPATH_ROUTE_ARRAY } from 'src/app/authentication/authentication-routing.module';

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
    this.router.navigate(AUTHENTICATION_LOGIN_FULLPATH_ROUTE_ARRAY);
  }

  onSignIn() {
    this.router.navigate(AUTHENTICATION_SIGNIN_FULLPATH_ROUTE_ARRAY);
  }

}
