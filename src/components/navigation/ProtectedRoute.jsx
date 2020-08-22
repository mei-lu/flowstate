import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Context from '../../utils/Context';
import Navigation from '../navigation/Navigation';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const context = React.useContext(Context);

    return (
            <Route {...rest} render={props => context.authState ?<> <Navigation /><Component {...props} /> </>
            : <Redirect to={{ pathname: '/login', state: { from: props.location }} } />
            }/>
    )

}

export default ProtectedRoute;