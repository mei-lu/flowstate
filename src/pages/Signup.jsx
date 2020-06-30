import React from 'react';
import {Link} from '@reach/router';

class Signup extends React.Component{
    render() {
        return <div>
            <h2>Ticket Booth</h2>
            <form action='' method='post' className='login-form'>
                <input type="text" placeholder='Name' className='login-field'/>
                <input type="text" placeholder='Email' className='login-field'/>
                <input type="password" placeholder='Password' className='login-field'/>
                <button className='login-button'>Sign Up</button>
                <h5>Already have an account? <Link to='/login'>Login</Link></h5>
            </form>
    </div>
    }
}
export default Signup;
