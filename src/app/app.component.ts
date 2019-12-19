import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers/root.reducer';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TICKETS_MANAGE_TICKETS_FULLPATH_ROUTE_ARRAY } from './tickets/tickets-routing.module';
import { AUTHENTICATION_LOGIN_FULLPATH_ROUTE_ARRAY } from './authentication/authentication-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  // Subscriptions array
  subs: Subscription[] = [];

  // Global environment variable
  public environment = environment;

  // Store internal dependencies
  public userData$ = this.store.select((state) => {
    return state.appGlobalState.userData;
  });

  constructor(private store: Store<State>, private router: Router) { }

  ngOnInit() {
    // Autoredirection based on user data available in store
    this.autoRedirection();
  }

  ngOnDestroy() {
    // Unsubscribe all to avoid memory leak
    this.subs.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  private autoRedirection() {
    // Check if there is a user in the store
    const sub = this.userData$.subscribe((userData) => {
      if (userData !== null) {
        // TEMP - there should be an async validation of the token
        this.router.navigate(TICKETS_MANAGE_TICKETS_FULLPATH_ROUTE_ARRAY);
      } else {
        this.router.navigate(AUTHENTICATION_LOGIN_FULLPATH_ROUTE_ARRAY);
      }
    });
    // Add to subs array for unsubcribe on destroy
    this.subs.push(sub);
  }
}
