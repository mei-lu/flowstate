import * as ActionTypes from '../actions/ActionTypes';

export const defaultState = {
    isAuthenticated: false,
}

export const AuthReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case ActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false
            }
        default: return {
            ...state,
            isAuthenticated: false
        }
    }
}