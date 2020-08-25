import React from 'react'
import LogoImg from '../../img/logo.svg';
import { useHistory } from 'react-router-dom';

function Logo() {
    const history = useHistory();

    return <div className='logo' onClick={() => history.push('/')}>
        <img className='logo-img' src={LogoImg} alt=''/>
        Flowstate
    </div>
}
export default Logo;