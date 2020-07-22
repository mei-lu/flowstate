import React from 'react';
import {Link} from 'react-router-dom';
import {gsap} from 'gsap';

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

    handleLogin = async (e) => {
        e.preventDefault();

        const loginData = {
            email: this.state.email,
            password: this.state.password
        };

        console.log(loginData);

        await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        })
        .then(
            response => response.json()
        )
        .catch((error) => {
            console.error(error);
        });
    }

    render() {
        return <div>
            <h2 ref={element => this.headingRef = element}>Enter Station</h2>
            <form onSubmit={e => this.handleLogin(e)} className='login-form' ref={element => this.loginRef = element}>
                <input type="text" placeholder='Email' name='email' className='login-field' onChange={e => this.handleForm(e)}/>
                <input type="password" placeholder='Password' name='password' className='login-field' onChange={e => this.handleForm(e)}/>
                <button className='login-button' type='submit'>Login</button>
                <h5>Don't have an account? <Link to='/signup'>Sign Up</Link></h5>
            </form>
    </div>
    }
}
export default Login;
