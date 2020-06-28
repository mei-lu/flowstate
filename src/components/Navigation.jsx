import React from 'react';
import Level from '../components/Level'
import {Link} from '@reach/router';
class Navigation extends React.Component {
    render() {
        return <div className='navigation'>
            <div><Level/></div>
            <div className='nav-labels'>
                <Link to='/'>Timer</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/login'>Log In</Link>
            </div>
        </div>
    }
}

export default Navigation;