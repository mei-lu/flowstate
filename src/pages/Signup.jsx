import React from 'react';
import { Link } from '@reach/router';
import { gsap } from 'gsap';

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        let timeline = gsap.timeline();
        timeline.from(this.headingRef, .5, {opacity: 0, y: -50});
        timeline.from(this.signupRef, .5, {opacity: 0}, '-=.5')
    }

    signUpUser = async (e) => {
        e.preventDefault();

        const signUpData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signUpData),
        })


    }

    handleForm = async (e) => {
        await this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return <div>
            <h2 ref={element => this.headingRef = element}>Ticket Booth</h2>
            <form onSubmit={e => this.signUpUser(e)} className='login-form' ref={element => this.signupRef = element}>
                <input type="text" placeholder='Name' name='name' className='login-field' onChange={e => this.handleForm(e)}/>
                <input type="text" placeholder='Email' name='email' className='login-field' onChange={e => this.handleForm(e)}/>
                <input type="password" placeholder='Password' name='password' className='login-field' onChange={e => this.handleForm(e)}/>
                <button className='login-button'>Sign Up</button>
                <h5>Already have an account? <Link to='/login'>Login</Link></h5>
            </form>
    </div>
    }
}
export default Signup;
