import React from 'react';
import { Link } from 'react-router-dom';
// import {gsap} from 'gsap';
import SolidButton from '../components/assets/SolidButton';
import Auth from '../utils/Auth';

function Signup() {
    const [state, setState]  = React.useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        alert: null,
    });

    // const history = useHistory();

    // componentDidMount() {
    //     let timeline = gsap.timeline();
    //     timeline.from(headingRef, .5, {opacity: 0, y: -50});
    //     timeline.from(signupRef, .5, {opacity: 0}, '-=.5')
    // }

    const signUpUser = async (e) => {
        e.preventDefault();
        if (!state.email || !state.name || !state.password || !state.confirmPassword) {
            setState({ ...state, alert: 'Please complete all fields' });
            return;
        } else if (state.password !== this.state.confirmPassword) {
            setState({ ...state, alert: 'Passwords don\'t match' });
            return;
        }
        // Profile.signup(() => {
        //     history.push('/dashboard');
        // });
    }

    const handleForm = async (e) => {
        await setState({ ...state, [e.target.name]: e.target.value });
    }

    return <div>
        {state.alert ? state.alert : null}
        <h2>Sign Up</h2>
        <form className='login-form'>
            <input type="text" placeholder='Name' name='name' className='login-field' onChange={e => handleForm(e)}/>
            <input type="text" placeholder='Email' name='email' className='login-field' onChange={e => handleForm(e)}/>
            <input type="password" placeholder='Password' name='password' className='login-field' onChange={e => handleForm(e)}/>
            <input type="password" placeholder='Confirm Password' name='confirmPassword' className='login-field' onChange={e => handleForm(e)}/>
            <SolidButton onClick={e => signUpUser(e)} name='Sign Up' />
            <h5>Already have an account? <Link to='/login'><b>Login</b></Link></h5>
        </form>
    </div>
    
}
export default Signup;
