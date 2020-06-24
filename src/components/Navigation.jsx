import React from 'react';
import Level from '../components/Level'
class Navigation extends React.Component {
    render() {
        return <div className='navigation'>
            <Level/>
            <div className='nav-labels'>
                <div>Timer</div>
                <div>Dashboard</div>
                <div>Log In</div>
            </div>
        </div>
    }
}

export default Navigation;