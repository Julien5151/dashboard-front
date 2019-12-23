import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers/root.reducer';
import { take, debounceTime } from 'rxjs/operators';
import * as SigninActions from 'src/app/authentication/components/signin/signin.actions';
import { arePasswordsIdentical } from 'src/app/shared/validators/sync/arePasswordsIdentical.validator';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { BasicComponent } from 'src/app/shared/components/basic/basic.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent extends BasicComponent implements OnInit, OnDestroy {

  // Subscriptions array
  subs: Subscription[] = [];
  // Form variable
  signinForm: FormGroup;

  // Store internal dependencies
  public email$ = this.store.select((state) => {
    return state.authenticationModule.signinState.email;
  });
  public password$ = this.store.select((state) => {
    return state.authenticationModule.signinState.password;
  });
  public passwordConfirmation$ = this.store.select((state) => {
    return state.authenticationModule.signinState.passwordConfirmation;
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
    this.handlePasswordConfirmationChanges();
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
      this.signinForm = new FormGroup({
        email: new FormControl(email, Validators.email),
        password: new FormControl(),
        passwordConfirmation: new FormControl()
      }, {
        validators: arePasswordsIdentical
      });
    });
    // Add to subs array for unsubcribe on destroy
    this.subs.push(sub);
  }

  private handleEmailChanges() {
    // Subscribe to any value changes in the form
    const sub = this.signinForm.get('email').valueChanges.pipe(debounceTime(500)).subscribe((emailValue) => {
      if (this.signinForm.get('email').valid) {
        this.store.dispatch(new SigninActions.SigninUpdateEmail(emailValue));
      } else {
        this.store.dispatch(new SigninActions.SigninUpdateEmail(null));
      }
    });
    // Add to subs array for unsubcribe on destroy
    this.subs.push(sub);
  }

  private handlePasswordChanges() {
    // Subscribe to any value changes in the form
    const sub = this.signinForm.get('password').valueChanges.pipe(debounceTime(500)).subscribe((passwordValue) => {
      if (this.signinForm.get('password').valid) {
        this.store.dispatch(new SigninActions.SigninUpdatePassword(passwordValue));
      } else {
        this.store.dispatch(new SigninActions.SigninUpdatePassword(null));
      }
    });
    // Add to subs array for unsubcribe on destroy
    this.subs.push(sub);
  }

  private handlePasswordConfirmationChanges() {
    // Subscribe to any value changes in the form
    const sub = this.signinForm.get('passwordConfirmation').valueChanges.pipe(debounceTime(500)).subscribe((passwordConfirmationValue) => {
      if (this.signinForm.get('passwordConfirmation').valid) {
        this.store.dispatch(new SigninActions.SigninUpdatePasswordConfirmation(passwordConfirmationValue));
      } else {
        this.store.dispatch(new SigninActions.SigninUpdatePasswordConfirmation(null));
      }
    });
    // Add to subs array for unsubcribe on destroy
    this.subs.push(sub);
  }

  onSignin() {
    // Get data from state
    const email = this.getState().authenticationModule.signinState.email;
    const password = this.getState().authenticationModule.signinState.password;
    const passwordConfirmation = this.getState().authenticationModule.signinState.passwordConfirmation;
    // Signin user in database
    this.dbService.signIn(email, password, passwordConfirmation).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
