import React from 'react';
import {Link} from '@reach/router';
import {gsap} from 'gsap';

class Login extends React.Component{
    componentDidMount() {
        let timeline = gsap.timeline();
        timeline.from(this.headingRef, .5, {y: -100, ease: 'power3', opacity: 0});
        timeline.from(this.loginRef, .5, {opacity: 0}, '-=.5')
    }
    render() {
        return <div>
            <h2 ref={element => this.headingRef = element}>Enter Station</h2>
            <form action='' method='post' className='login-form' ref={element => this.loginRef = element}>
                <input type="text" placeholder='Email' className='login-field'/>
                <input type="password" placeholder='Password' className='login-field'/>
                <button className='login-button'>Login</button>
                <h5>Don't have an account? <Link to='/signup'>Sign Up</Link></h5>
            </form>
    </div>
    }
}
export default Login;
