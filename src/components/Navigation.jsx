import React from 'react';
import Logo from '../img/logo.svg'
class Navigation extends React.Component {
    render() {
        return <div className='navigation'>
            <div className='nav-contents'>
                <div className='logo-wrapper'>
                    <img className='logo' src={Logo} alt=''/>
                    <p className='glow logo-text'>Stationmaster</p>
                </div>
                <div className='nav-labels'>
                    <div>Station</div>
                    <div>Dashboard</div>
                    <div>Settings</div>
                    <div>Log In</div>
                </div>
            </div>
        </div>
    }
}

export default Navigation;