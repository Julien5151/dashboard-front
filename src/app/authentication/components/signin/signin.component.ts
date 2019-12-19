import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers/root.reducer';
import { take, debounceTime } from 'rxjs/operators';
import * as SigninActions from 'src/app/authentication/components/signin/signin.actions';
import { arePasswordsIdentical } from 'src/app/shared/validators/sync/arePasswordsIdentical.validator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  // Subscriptions array
  subs: Subscription[] = [];
  // Form variable
  signinForm: FormGroup;

  // Store internal dependencies
  public email$ = this.store.select((state) => {
    return state.authenticationModule.signinState.email;
  });

  constructor(private store: Store<State>) { }

  ngOnInit() {
    // Init reactive form object
    this.initForm();
    // Handle email value typing
    this.handleEmailChanges();
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

}
