import React from 'react';
import {Link} from 'react-router-dom';

class Landing extends React.Component{
    render() {
        return <div>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
        </div>
    }
}
export default Landing;