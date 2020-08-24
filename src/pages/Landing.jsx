import React from 'react';
import { Link } from 'react-router-dom';
import SolidButton from '../components/assets/SolidButton';
import OutlinedButton from '../components/assets/OutlinedButton';
import PublicNav from '../components/navigation/PublicNav';
import HeroSection from '../components/landing/HeroSection';
import { ReactComponent as WholesomeImage } from '../img/landing/wholesome.svg';
import { ReactComponent as WholesomeImage1 } from '../img/landing/2.svg';
import { ReactComponent as WholesomeImage2 } from '../img/landing/3.svg';

function Landing() {
    return <div>
        <PublicNav />
        <div id='features'><HeroSection 
            image={<WholesomeImage height={400}/>} 
            heading='2 in 1 Productivity' 
            body='Combining kanban boards and the pomodoro method to get you into flow' 
        /></div>
        {/* <WholesomeImage1 height={500}/>
        <WholesomeImage2 height={500}/> */}
    </div>
}
export default Landing;