import * as ActionTypes from '../actions/ActionTypes';

export const defaultState = {
    isAuthenticated: false,
    isLoading: false
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
        case ActionTypes.LOADING:
            return {
                ...state,
                isLoading: true
            }
        default: return {
            ...state,
            isAuthenticated: false,
        }
    }
}