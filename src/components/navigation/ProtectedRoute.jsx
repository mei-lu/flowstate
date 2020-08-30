import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Context from '../../utils/Context';
import Navigation from '../navigation/Navigation';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const context = React.useContext(Context);

    // Decide rendering for private route for either authenticated state, redirect to login, or show loading (to prevent flicker to login page)
    const decideRoute = (props) => {
        if (context.loadingState) {
            return null;
        } else if (context.authState) {
            return <><Navigation /><Component {...props} /></>
        } else {
            return <Redirect to={{ pathname: '/login', state: { from: props.location }} } />
        }
    }

    return (
            <Route {...rest} render={props => decideRoute(props) }/>
    )

}

export default ProtectedRoute;