import React from 'react';
import Logo from '../img/Logo.png'
class Navigation extends React.Component {
    render() {
        return <div className='navigation'>
            <div className='nav-contents'>
                <div className='logo-wrapper'>
                    <img className='logo' src={Logo} alt=''/>
                    <p className='glow'>Stationmaster</p>
                </div>
                <div className='nav-labels'>
                    <div>Dashboard</div>
                    <div>Station</div>
                    <div>Settings</div>
                    <div>Hi Mei!</div>
                    <div>Log Out</div>
                </div>
            </div>
        </div>
    }
}

export default Navigation;