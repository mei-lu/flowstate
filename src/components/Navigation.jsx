import React from 'react';
import {withRouter, Link} from 'react-router-dom';
class Navigation extends React.Component {
    render() {
        return <div className='navigation'>
            <p>30 Points</p>
            <div className='nav-labels'>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/tasks'>Tasks</Link>
                <Link to='/login'>Log In</Link>
            </div>
        </div>
    }
}

export default withRouter(Navigation);