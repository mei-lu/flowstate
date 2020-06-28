import React from 'react';
import {Link} from '@reach/router';

class Login extends React.Component{
    render() {
        return <div>
            <h2>Enter Station</h2>
            <form action='' method='post' className='login-form'>
                <input type="text" placeholder='Email' className='login-field'/>
                <input type="password" placeholder='Password' className='login-field'/>
                <button className='login-button'>Login</button>
                <h5>Don't have an account? <Link to='/signup'>Sign Up</Link></h5>
            </form>
    </div>
    }
}
export default Login;
