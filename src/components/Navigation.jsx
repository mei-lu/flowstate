import React from 'react';
import Logo from '../components/Logo';
import {Link} from '@reach/router';
class Navigation extends React.Component {
    render() {
        return <div className='navigation'>
            <p>30 Points</p>
            <div className='nav-labels'>
                <Link to='/'>Timer</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/login'>Log In</Link>
            </div>
        </div>
    }
}

export default Navigation;