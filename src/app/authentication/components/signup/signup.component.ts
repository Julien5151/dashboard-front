import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers/root.reducer';
import { take, debounceTime } from 'rxjs/operators';
import * as SignupActions from 'src/app/authentication/components/signup/signup.actions';
import { arePasswordsIdentical } from 'src/app/shared/validators/sync/arePasswordsIdentical.validator';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { BasicComponent } from 'src/app/shared/components/basic/basic.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent extends BasicComponent implements OnInit, OnDestroy {

  // Subscriptions array
  subs: Subscription[] = [];
  // Form variable
  signupForm: FormGroup;

  // Store internal dependencies
  public email$ = this.store.select((state) => {
    return state.authenticationModule.signupState.email;
  });
  public password$ = this.store.select((state) => {
    return state.authenticationModule.signupState.password;
  });
  public passwordConfirmation$ = this.store.select((state) => {
    return state.authenticationModule.signupState.passwordConfirmation;
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
      this.signupForm = new FormGroup({
        email: new FormControl(email, [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(6)])
      }, {
        validators: arePasswordsIdentical
      });
    });
    // Add to subs array for unsubcribe on destroy
    this.subs.push(sub);
  }

  private handleEmailChanges() {
    // Subscribe to any value changes in the form
    const sub = this.signupForm.get('email').valueChanges.pipe(debounceTime(500)).subscribe((emailValue) => {
      if (this.signupForm.get('email').valid) {
        this.store.dispatch(new SignupActions.SignupUpdateEmail(emailValue));
      } else {
        this.store.dispatch(new SignupActions.SignupUpdateEmail(null));
      }
    });
    // Add to subs array for unsubcribe on destroy
    this.subs.push(sub);
  }

  private handlePasswordChanges() {
    // Subscribe to any value changes in the form
    const sub = this.signupForm.get('password').valueChanges.pipe(debounceTime(500)).subscribe((passwordValue) => {
      if (this.signupForm.get('password').valid) {
        this.store.dispatch(new SignupActions.SignupUpdatePassword(passwordValue));
      } else {
        this.store.dispatch(new SignupActions.SignupUpdatePassword(null));
      }
    });
    // Add to subs array for unsubcribe on destroy
    this.subs.push(sub);
  }

  private handlePasswordConfirmationChanges() {
    // Subscribe to any value changes in the form
    const sub = this.signupForm.get('passwordConfirmation').valueChanges.pipe(debounceTime(500)).subscribe((passwordConfirmationValue) => {
      if (this.signupForm.get('passwordConfirmation').valid) {
        this.store.dispatch(new SignupActions.SignupUpdatePasswordConfirmation(passwordConfirmationValue));
      } else {
        this.store.dispatch(new SignupActions.SignupUpdatePasswordConfirmation(null));
      }
    });
    // Add to subs array for unsubcribe on destroy
    this.subs.push(sub);
  }

  onSignup() {
    // Get data from state
    const email = this.getState().authenticationModule.signupState.email;
    const password = this.getState().authenticationModule.signupState.password;
    const passwordConfirmation = this.getState().authenticationModule.signupState.passwordConfirmation;
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
