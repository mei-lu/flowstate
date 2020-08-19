import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Profile from '../../utils/Profile';

function ProtectedRoute({ children, ...rest }) {
    return <Route {...rest} render={({ location }) => (
        Profile.authenticated ? children 
        : <Redirect to={{
            pathname: '/login',
            state: { from: location }
        }} />
    )} />
}

export default ProtectedRoute;