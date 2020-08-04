import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import Logo from '../Logo';
class Navigation extends React.Component {
    render() {
        return <div className='navigation'>
            <div className='logo'><Logo/></div>
            <div className='nav-labels'>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/tasks'>Tasks</Link>
                <Link to='/schedule'>Schedule</Link>
                <Link to='/pomodoro'>Timer</Link>
                <Link to='/login'>Log In</Link>
            </div>
        </div>
    }
}

export default withRouter(Navigation);