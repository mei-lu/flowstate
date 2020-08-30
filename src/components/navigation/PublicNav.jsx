import React from 'react';
import Logo from '../assets/Logo';
import { Link } from 'react-router-dom';

const PublicNav = (props) => {
    return(
        <div className='landing-nav'>
            <div><Logo/></div>
            <div className='landing-nav-labels-wrapper'>
                <div className='landing-nav-labels'><a href='#features'>Features</a></div>
                <div className='landing-nav-labels'><a href='#about'>About</a></div>
                <div className='landing-nav-labels'><a href='#source'>Source</a></div>
                <div className='landing-nav-labels'>
                    <Link to='/login'><button className='landing-nav-button-solid'>Login</button></Link>
                    <Link to='/signup'><button className='landing-nav-button-outlined'>Sign Up</button></Link>
                </div>
            </div>
        </div>
    );
}

export default PublicNav;