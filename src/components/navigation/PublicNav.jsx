import React from 'react';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

const PublicNav = (props) => {
    return(
        <div className='landing-nav'>
            <div><Logo/></div>
            <div className='landing-nav-labels-wrapper'>
                <div className='landing-nav-labels'><Link to='/about'>About</Link></div>
                <div className='landing-nav-labels'><Link to='/features'>Features</Link></div>
                <div className='landing-nav-labels'><Link to='/contact'>Contact</Link></div>
            </div>
        </div>
    );
}

export default PublicNav;