import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Context from '../../utils/Context';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const context = React.useContext(Context);
React.useEffect(()=> {
    console.log(context.authState)
}, [context])
    return (
        <Route {...rest} render={props => context.authState ? <Component {...props} /> 
         : <Redirect to={{ pathname: '/login', state: { from: props.location }} } />
         }/>
            
    )

}

export default ProtectedRoute;