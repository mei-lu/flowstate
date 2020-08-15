import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {gsap} from 'gsap';

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            alert: null,
            redirect: null
        }
    }

    componentDidMount() {
        let timeline = gsap.timeline();
        timeline.from(this.headingRef, .5, {opacity: 0, y: -50});
        timeline.from(this.signupRef, .5, {opacity: 0}, '-=.5')
    }

    signUpUser = async (e) => {
        e.preventDefault();
        if (!this.state.email || !this.state.name || !this.state.password || !this.state.confirmPassword) {
            this.setState({alert: 'Please complete all fields'});
            return;
        } else if (this.state.password !== this.state.confirmPassword) {
            this.setState({alert: 'Passwords don\'t match'});
            return;
        }

        await fetch(`${process.env.REACT_APP_API_BASE}/api/signup`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }),
        })
        .then(response => {
            if (!response.ok) {
                this.setState({alert: 'Email already exists'});
            } else {
                this.setState({redirect: 'dashboard'});
            }
        })

    }

    handleForm = async (e) => {
        await this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return <div>
            {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
            {this.state.alert ? this.state.alert : null}
            <h2 ref={element => this.headingRef = element}>Sign Up</h2>
            <form className='login-form' ref={element => this.signupRef = element}>
                <input type="text" placeholder='Name' name='name' className='login-field' onChange={e => this.handleForm(e)}/>
                <input type="text" placeholder='Email' name='email' className='login-field' onChange={e => this.handleForm(e)}/>
                <input type="password" placeholder='Password' name='password' className='login-field' onChange={e => this.handleForm(e)}/>
                <input type="password" placeholder='Confirm Password' name='confirmPassword' className='login-field' onChange={e => this.handleForm(e)}/>
                <button className='login-button' onClick={e => this.signUpUser(e)}>Sign Up</button>
                <h5>Already have an account? <Link to='/login'><b>Login</b></Link></h5>
            </form>
    </div>
    }
}
export default Signup;
