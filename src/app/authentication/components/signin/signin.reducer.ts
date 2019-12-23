import * as SigninActions from 'src/app/authentication/components/signin/signin.actions';

// Component state
export interface SigninState {
  email: string;
  password: string;
  passwordConfirmation: string;
}

// Component initial state
export const signinInitialState: SigninState = {
  email: null,
  password: null,
  passwordConfirmation: null
};

// Component reducer
export function signinReducer(
  state: SigninState = signinInitialState,
  action: SigninActions.SigninActions): SigninState {
  switch (action.type) {
    case SigninActions.RESTORE_INITIAL_STATE:
      return signinInitialState;
    case SigninActions.UPDATE_EMAIL:
      return updateEmail(state, action);
    case SigninActions.UPDATE_PASSWORD:
      return updatePassword(state, action);
    case SigninActions.UPDATE_PASSWORD_CONFIRMATION:
      return updatePasswordConfirmation(state, action);
    default:
      return state;
  }
}

function updateEmail(state: SigninState, action: SigninActions.SigninUpdateEmail): SigninState {
  return {
    ...state,
    email: action.payload
  };
}

function updatePassword(state: SigninState, action: SigninActions.SigninUpdatePassword): SigninState {
  return {
    ...state,
    password: action.payload
  };
}

function updatePasswordConfirmation(state: SigninState, action: SigninActions.SigninUpdatePasswordConfirmation): SigninState {
  return {
    ...state,
    passwordConfirmation: action.payload
  };
}
