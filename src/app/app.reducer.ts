// Component VM
export interface AppGlobalVM {
    isLoggedIn: boolean;
}

// Component initial state
const appGlobalInitialState: AppGlobalVM = {
    isLoggedIn: false
};

// Component reducer
export function appGlobalReducer(state: AppGlobalVM = appGlobalInitialState, action): AppGlobalVM {
    return state;
}
