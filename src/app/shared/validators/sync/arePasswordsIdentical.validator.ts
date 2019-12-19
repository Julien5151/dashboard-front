import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const arePasswordsIdentical: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const passwordConfirmation = control.get('passwordConfirmation');

  return password && passwordConfirmation && password.value !== passwordConfirmation.value ?
    { passwordMismatch: true } : null;
};
