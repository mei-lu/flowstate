import React from 'react'
import LogoImg from '../img/logo.svg'

class Logo extends React.Component{
    render() {
        return <div className='logo'>
            <img className='logo-img' src={LogoImg} alt=''/>
            <h5>workstation</h5>
        </div>
    }
}
export default Logo;