import * as ActionTypes from '../actions/ActionTypes';

export const defaultState = {
    isAuthenticated: false,
    isLoading: true
}

export const AuthReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false
            }
        case ActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                isLoading: false
            }
        default: return {
            ...state,
            isAuthenticated: false,
            isLoading: true
        }
    }
}