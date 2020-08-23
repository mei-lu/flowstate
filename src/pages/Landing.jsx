import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import SolidButton from '../components/assets/SolidButton';
import OutlinedButton from '../components/assets/OutlinedButton';
import PublicNav from '../components/navigation/PublicNav';

function Landing() {
    return <div>
        <PublicNav />
        <Link to='/login'><SolidButton name='Login' color='solid-button-one' /></Link>
        <Link to='/signup'><OutlinedButton name='Sign Up' color='solid-button-two' /></Link>
    </div>
}
export default Landing;