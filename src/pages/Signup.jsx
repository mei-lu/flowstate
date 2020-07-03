import React from 'react';
import {Link} from '@reach/router';
import {gsap} from 'gsap';

class Signup extends React.Component{

    componentDidMount() {
        let timeline = gsap.timeline();
        timeline.from(this.headingRef, .5, {opacity: 0, y: -50});
        timeline.from(this.signupRef, .5, {opacity: 0}, '-=.5')
    }
    render() {
        return <div>
            <h2 ref={element => this.headingRef = element}>Ticket Booth</h2>
            <form action='' method='post' className='login-form' ref={element => this.signupRef = element}>
                <input type="text" placeholder='Name' className='login-field'/>
                <input type="text" placeholder='Email' className='login-field'/>
                <input type="password" placeholder='Password' className='login-field'/>
                <button className='login-button'>Sign Up</button>
                <h5>Already have an account? <Link to='/login'>Login</Link></h5>
            </form>
    </div>
    }
}
export default Signup;
