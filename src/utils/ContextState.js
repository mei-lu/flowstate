import React from 'react';
import Context from './Context';
import * as Actions from '../store/actions/Actions';
import * as AuthReducer from '../store/reducers/AuthReducers';
import Auth from './Auth';

// Logic for reading and updating state passed through the value prop of Context

const ContextState = (props) => {
    const [authReducer, dispatchAuthReducer] = React.useReducer(AuthReducer.AuthReducer, AuthReducer.defaultState);

     // Verify if JWT is validated in order to persist users on refresh
  React.useEffect(() => {
    Auth.verify(()=> {
      handleLogin();
    })
  }, []);

    const handleLogin = () => {
        dispatchAuthReducer(Actions.login_success());
    }

    const handleLogout = () => {
        dispatchAuthReducer(Actions.login_failure);
    }
 
    return(
        <Context.Provider value={{
            authState: authReducer.isAuthenticated,
            handleLogin: () => handleLogin(),
            handleLogout: () => handleLogout()
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextState;