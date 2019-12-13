import * as AppGlobalActions from './app.actions';
import { User } from './shared/interfaces/user.interface';

// Component state
export interface AppGlobalState {
    isLoading: boolean;
    userData: User;
}

// Component initial state
export const appGlobalInitialState: AppGlobalState = {
    isLoading: false,
    userData: null
};

// Component reducer
export function appGlobalReducer(state: AppGlobalState = appGlobalInitialState, action: AppGlobalActions.AppGlobalActions): AppGlobalState {
    switch (action.type) {
        case AppGlobalActions.RESTORE_INITIAL_STATE:
            return appGlobalInitialState;
        case AppGlobalActions.UPDATE_IS_LOADING:
            return updateIsLoading(state, action);
        case AppGlobalActions.UPDATE_USER_DATA:
            return updateUserData(state, action);
        default:
            return state;
    }
}

function updateIsLoading(state: AppGlobalState, action: AppGlobalActions.AppGlobalUpdateIsLoading): AppGlobalState {
    return {
        ...state,
        isLoading: action.payload
    };
}

function updateUserData(state: AppGlobalState, action: AppGlobalActions.AppGlobalUpdateUserData): AppGlobalState {
    return {
        ...state,
        userData: action.payload
    };
}
