import React from 'react';
import {Link} from 'react-router-dom';
import {gsap} from 'gsap';
import {handleLogin} from '../utils/AuthFunctions';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    // Handle on page load GSAP animations
    componentDidMount() {
        let timeline = gsap.timeline();
        timeline.from(this.headingRef, .5, {y: -50, ease: 'power3', opacity: 0});
        timeline.from(this.loginRef, .5, {opacity: 0}, '-=.5')
    }

    // Change state of email and password fields when user types. Async to have accurate text body when console.log()
    handleForm = async event => {
        await this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return <div>
            <h2 ref={element => this.headingRef = element}>Login</h2>
            <div className='login-form' ref={element => this.loginRef = element}>
                <input type="text" placeholder='Email' name='email' className='login-field' onChange={e => this.handleForm(e)}/>
                <input type="password" placeholder='Password' name='password' className='login-field' onChange={e => this.handleForm(e)}/>
                <button className='login-button' onClick={() => handleLogin(this.state.email, this.state.password)}>Login</button>
                <h5>Don't have an account? <Link to='/signup'><b>Sign Up</b></Link></h5>
            </div>
    </div>
    }
}
export default Login;
