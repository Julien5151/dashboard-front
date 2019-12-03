import * as AppGlobalActions from './app.actions';

// Component state
export interface AppGlobalState {
    isLoading: boolean;
}

// Component initial state
export const appGlobalInitialState: AppGlobalState = {
    isLoading: false
};

// Component reducer
export function appGlobalReducer(state: AppGlobalState = appGlobalInitialState, action: AppGlobalActions.AppGlobalActions): AppGlobalState {
    switch (action.type) {
        case AppGlobalActions.RESTORE_INITIAL_STATE:
            return appGlobalInitialState;
        case AppGlobalActions.UPDATE_IS_LOADING:
            return updateIsLoading(state, action);
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
