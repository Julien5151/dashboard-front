import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers/root.reducer';
import { Subscription } from 'rxjs';
import { take, debounceTime } from 'rxjs/operators';
import * as LoginActions from 'src/app/authentication/components/login/login.actions';
import { BasicComponent } from 'src/app/shared/components/basic/basic.component';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { LoginResponse } from 'src/app/shared/interfaces/LoginResponse.interface';
import * as AppGlobalActions from 'src/app/app.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BasicComponent implements OnInit, OnDestroy {

  // Subscriptions array
  subs: Subscription[] = [];
  // Form variable
  loginForm: FormGroup;

  // Store internal dependencies
  public email$ = this.store.select((state) => {
    return state.authenticationModule.loginState.email;
  });

  constructor(
    store: Store<State>,
    private dbService: DatabaseService
  ) {
    super(store);
  }

  ngOnInit() {
    // Init reactive form object
    this.initForm();
    // Handle form values typing
    this.handleEmailChanges();
    this.handlePasswordChanges();
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
        email: new FormControl(email, [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
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

  private handlePasswordChanges() {
    // Subscribe to any value changes in the form
    const sub = this.loginForm.get('password').valueChanges.pipe(debounceTime(500)).subscribe((passwordValue) => {
      if (this.loginForm.get('password').valid) {
        this.store.dispatch(new LoginActions.LoginUpdatePassword(passwordValue));
      } else {
        this.store.dispatch(new LoginActions.LoginUpdatePassword(null));
      }
    });
    // Add to subs array for unsubcribe on destroy
    this.subs.push(sub);
  }

  onLogin() {
    // Get values from the state
    const email = this.getState().authenticationModule.loginState.email;
    const password = this.getState().authenticationModule.loginState.password;
    // Call login on the backend
    this.dbService.logIn(email, password).subscribe(
      (response: LoginResponse) => {
        // Store user data in state
        this.store.dispatch(new AppGlobalActions.AppGlobalUpdateUserData(response));
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
