import * as AuthenticationGlobalActions from 'src/app/authentication/components/authentication/authentication.actions';

// Component state
export interface AuthenticationGlobalState {
  isOpened: boolean;
}

// Component initial state
export const authenticationGlobalInitialState: AuthenticationGlobalState = {
  isOpened: false
};

// Component reducer
export function authenticationGlobalReducer(
  state: AuthenticationGlobalState = authenticationGlobalInitialState,
  action: AuthenticationGlobalActions.AuthenticationGlobalActions): AuthenticationGlobalState {
  switch (action.type) {
    case AuthenticationGlobalActions.RESTORE_INITIAL_STATE:
      return authenticationGlobalInitialState;
    case AuthenticationGlobalActions.UPDATE_IS_OPENED:
      return updateIsOpened(state, action);
    default:
      return state;
  }
}

function updateIsOpened(
  state: AuthenticationGlobalState,
  action: AuthenticationGlobalActions.AuthenticationGlobalUpdateIsOpened): AuthenticationGlobalState {
  return {
    ...state,
    isOpened: action.payload
  };
}
