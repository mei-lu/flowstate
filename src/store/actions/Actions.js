import * as ActionTypes from './ActionTypes';

export const login_success = () => {
    return {
      type: ActionTypes.LOGIN_SUCCESS
    }
  }
  
export const login_failure = () => {
  return {
    type: ActionTypes.LOGIN_FAILURE
  }
}

