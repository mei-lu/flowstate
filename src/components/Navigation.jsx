import React from 'react';

class Navigation extends React.Component {
    render() {
        return <div className='navigation'>
            <div className='nav-contents'>
                <div className='logo'>Logo</div>
                <div className='nav-labels'>
                    <div>Log</div>
                    <div>Friends</div>
                    <div>Settings</div>
                    <div>Log Out</div>
                </div>
            </div>
        </div>
    }
}

export default Navigation;