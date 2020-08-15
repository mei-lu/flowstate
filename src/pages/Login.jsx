import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {gsap} from 'gsap';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            alert: '',
            redirect: null
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

    // POST login information
    handleLogin = async (email, password) => {
        if (!email || !password) {
            this.setState({alert: 'Missing email or password'});
            return
        }
        await fetch(`${process.env.REACT_APP_API_BASE}/api/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',            
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        })
        .then(response => {
            if (!response.ok) {
                this.setState({alert: 'Incorrect email or password'});
                return;
            }  else {
                this.setState({redirect: 'dashboard'});
            }
        })
    }

    render() {
        return <div>
            {this.state.redirect ? <Redirect to={this.state.redirect}/> : null}
            {this.state.alert ? this.state.alert : null}
            <h2 ref={element => this.headingRef = element}>Login</h2>
            <div className='login-form' ref={element => this.loginRef = element}>
                <input type="text" placeholder='Email' name='email' className='login-field' onChange={e => this.handleForm(e)}/>
                <input type="password" placeholder='Password' name='password' className='login-field' onChange={e => this.handleForm(e)}/>
                <button className='login-button' onClick={() => this.handleLogin(this.state.email, this.state.password)}>Login</button>
                <h5>Don't have an account? <Link to='/signup'><b>Sign Up</b></Link></h5>
            </div>
    </div>
    }
}
export default Login;
