import React from 'react';
import {Router, Link} from '@reach/router';

class Landing extends React.Component{
    render() {
        return <div>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
        </div>
    }
}
export default Landing;