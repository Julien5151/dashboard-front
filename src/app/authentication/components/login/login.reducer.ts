import * as LoginActions from 'src/app/authentication/components/login/login.actions';

// Component state
export interface LoginState {
  email: string;
}

// Component initial state
export const loginInitialState: LoginState = {
  email: null
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
