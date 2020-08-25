import React from 'react';
import { Link } from 'react-router-dom';
import SolidButton from '../components/assets/SolidButton';
import OutlinedButton from '../components/assets/OutlinedButton';
import PublicNav from '../components/navigation/PublicNav';
import HeroSection from '../components/landing/HeroSection';
import WholesomeImage from '../img/landing/wholesome.svg';
import WholesomeImage1 from '../img/landing/2.svg';
import WholesomeImage2 from '../img/landing/3.svg';

function Landing() {
    return <div className='landing'>
        <PublicNav />
        <div id='features'><HeroSection 
            image={<img src={WholesomeImage} alt='' />}
            heading='Productivity System' 
            body='Combining kanban boards and the pomodoro method to get you into flow and get things done.'
            action={<SolidButton name='Enter Flow' link='/signup'/>} />
        </div>

        {/* <div id='about'><HeroSection 
            reverse={true}
            image={<img src={WholesomeImage2} alt='' />}
            heading='About' 
            body={
                <div>Inspired by Mihaly Csikszentmihalyi's book <i>Flow</i>, I wanted to create a tool that encourages healthy breaks</div>} />
        </div> */}

        <div id='source'><HeroSection 
            reverse={true}
            image={<img src={WholesomeImage1} alt='' />}
            heading='Source Code' 
            body='See the front end source code!'
            action={<a href='https://github.com/mei-lu/flowstate' target='_blank'><button className='outlined-button'>View on Github</button></a>} />
        </div>
    </div>

}
export default Landing;