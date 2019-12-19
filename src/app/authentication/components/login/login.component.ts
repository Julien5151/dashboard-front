import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers/root.reducer';
import { Subscription } from 'rxjs';
import { take, debounceTime } from 'rxjs/operators';
import * as LoginActions from 'src/app/authentication/components/login/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  // Subscriptions array
  subs: Subscription[] = [];
  // Form variable
  loginForm: FormGroup;

  // Store internal dependencies
  public email$ = this.store.select((state) => {
    return state.authenticationModule.loginState.email;
  });

  constructor(private store: Store<State>) { }

  ngOnInit() {
    // Init reactive form object
    this.initForm();
    // Handle email value typing
    this.handleEmailChanges();
  }

  ngOnDestroy() {
    // Unsubscribe all to avoid memory leak
    this.subs.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  private initForm() {
    // Check if there is data in store
    const sub = this.email$.pipe(take(1)).subscribe((email) => {
      this.loginForm = new FormGroup({
        email: new FormControl(email, Validators.email),
        password: new FormControl()
      });
    });
    // Add to subs array for unsubcribe on destroy
    this.subs.push(sub);
  }

  private handleEmailChanges() {
    // Subscribe to any value changes in the form
    const sub = this.loginForm.get('email').valueChanges.pipe(debounceTime(500)).subscribe((emailValue) => {
      if (this.loginForm.get('email').valid) {
        this.store.dispatch(new LoginActions.LoginUpdateEmail(emailValue));
      } else {
        this.store.dispatch(new LoginActions.LoginUpdateEmail(null));
      }
    });
    // Add to subs array for unsubcribe on destroy
    this.subs.push(sub);
  }

}
