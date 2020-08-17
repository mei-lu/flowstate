import React, { useState } from 'react';
// Hold state of user authentication
export function AuthContext(props) {
    const AuthContext = React.createContext({
        userAuthenticated: false
    });

    const [state, setState] = useState({
        userAuthenticated: false
      });
      
      return <AuthContext.Provider value={state.userAuthenticated}>
          {props.children}
      </AuthContext.Provider>

}