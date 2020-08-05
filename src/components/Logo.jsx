import React from 'react'
import LogoImg from '../img/logo.svg'

class Logo extends React.Component{
    render() {
        return <div className='logo'>
            <img className='logo-img' src={LogoImg} alt=''/>
        </div>
    }
}
export default Logo;