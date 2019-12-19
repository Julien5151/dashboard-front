import * as SigninActions from 'src/app/authentication/components/signin/signin.actions';

// Component state
export interface SigninState {
  email: string;
}

// Component initial state
export const signinInitialState: SigninState = {
  email: null
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
