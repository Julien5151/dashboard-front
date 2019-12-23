import * as LoginActions from 'src/app/authentication/components/login/login.actions';

// Component state
export interface LoginState {
  email: string;
  password: string;
}

// Component initial state
export const loginInitialState: LoginState = {
  email: null,
  password: null
};

// Component reducer
export function loginReducer(
  state: LoginState = loginInitialState,
  action: LoginActions.LoginActions): LoginState {
  switch (action.type) {
    case LoginActions.RESTORE_INITIAL_STATE:
      return loginInitialState;
    case LoginActions.UPDATE_EMAIL:
      return updateEmail(state, action);
    case LoginActions.UPDATE_PASSWORD:
      return updatePassword(state, action);
    default:
      return state;
  }
}

function updateEmail(state: LoginState, action: LoginActions.LoginUpdateEmail): LoginState {
  return {
    ...state,
    email: action.payload
  };
}

function updatePassword(state: LoginState, action: LoginActions.LoginUpdatePassword): LoginState {
  return {
    ...state,
    password: action.payload
  };
}
