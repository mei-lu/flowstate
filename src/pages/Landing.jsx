import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import SolidButton from '../components/assets/SolidButton';
import OutlinedButton from '../components/assets/OutlinedButton';

function Landing() {
    return <div>
        <div className='landing-nav'>
            <div><Logo/></div>
            <div className='landing-nav-labels-wrapper'>
                <div className='landing-nav-labels'><Link to='/about'>About</Link></div>
                <div className='landing-nav-labels'><Link to='/features'>Features</Link></div>
                <div className='landing-nav-labels'><Link to='/contact'>Contact</Link></div>
            </div>
        </div>
            <Link to='/login'><SolidButton name='Login' color='solid-button-one' /></Link>
            <Link to='/signup'><OutlinedButton name='Sign Up' color='solid-button-two' /></Link>
    </div>
}
export default Landing;