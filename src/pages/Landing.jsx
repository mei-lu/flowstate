import React from 'react';
import { Link } from 'react-router-dom';
import SolidButton from '../components/assets/SolidButton';
import OutlinedButton from '../components/assets/OutlinedButton';
import PublicNav from '../components/navigation/PublicNav';
import { ReactComponent as CoverImage} from '../img/landing/img.svg';

function Landing() {
    return <div>
        <PublicNav />
        <CoverImage height={500}/>
    </div>
}
export default Landing;