import * as SignupActions from 'src/app/authentication/components/signup/signup.actions';

// Component state
export interface SignupState {
  email: string;
  password: string;
  passwordConfirmation: string;
}

// Component initial state
export const signupInitialState: SignupState = {
  email: null,
  password: null,
  passwordConfirmation: null
};

// Component reducer
export function signupReducer(
  state: SignupState = signupInitialState,
  action: SignupActions.SignupActions): SignupState {
  switch (action.type) {
    case SignupActions.RESTORE_INITIAL_STATE:
      return signupInitialState;
    case SignupActions.UPDATE_EMAIL:
      return updateEmail(state, action);
    case SignupActions.UPDATE_PASSWORD:
      return updatePassword(state, action);
    case SignupActions.UPDATE_PASSWORD_CONFIRMATION:
      return updatePasswordConfirmation(state, action);
    default:
      return state;
  }
}

function updateEmail(state: SignupState, action: SignupActions.SignupUpdateEmail): SignupState {
  return {
    ...state,
    email: action.payload
  };
}

function updatePassword(state: SignupState, action: SignupActions.SignupUpdatePassword): SignupState {
  return {
    ...state,
    password: action.payload
  };
}

function updatePasswordConfirmation(state: SignupState, action: SignupActions.SignupUpdatePasswordConfirmation): SignupState {
  return {
    ...state,
    passwordConfirmation: action.payload
  };
}
