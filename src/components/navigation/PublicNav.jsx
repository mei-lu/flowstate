import React from 'react';
import Logo from '../assets/Logo';
import SolidButton from '../assets/SolidButton';
import OutlinedButton from '../assets/OutlinedButton';
import { Link } from 'react-router-dom';

const PublicNav = (props) => {
    return(
        <div className='landing-nav'>
            <div><Logo/></div>
            <div className='landing-nav-labels-wrapper'>
                <div className='landing-nav-labels'><a href='#features'>Features</a></div>
                <div className='landing-nav-labels'><a href='#about'>About</a></div>
                <div className='landing-nav-labels'><a href='#contact'>Contact</a></div>
                <div className='landing-nav-labels'>
                    <Link to='/login'><SolidButton name='Login' style='landing-nav-button' /></Link>
                    <Link to='/signup'><OutlinedButton name='Sign Up' style='landing-nav-button' /></Link>
                </div>
            </div>
        </div>
    );
}

export default PublicNav;