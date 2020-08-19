import React from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import Profile from '../../utils/Profile';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [state, setState] = React.useState({
        loading: true,
        authStatus: false,
    });

    const history = useHistory();

    // Verify if JWT is validated in order to persist users on refresh
    React.useEffect(() => {
        Profile.verify(() => {
            if (Profile.authenticated) {
                    setState({ ...state, loading: false, authStatus: true });
            } else {
                history.replace('/login');
            }
        })
    }, []);

    return (
        <Route {...rest} render={props => state.authStatus ? <Component {...props} /> 
        : state.loading ? <div>Loading...</div> : <Redirect to={{ pathname: '/login', state: { from: props.location }} } />
        }/>
    )

}

export default ProtectedRoute;