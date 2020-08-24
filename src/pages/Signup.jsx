import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
// import {gsap} from 'gsap';
import SolidButton from '../components/assets/SolidButton';
import Auth from '../utils/Auth';
import Context from '../utils/Context';

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

    const context = React.useContext(Context);
    let history = useHistory();
    const location = useLocation();

    React.useEffect(()=> {
        const checkAuth = () => {
            if (context.authState) {
                let { from } = location.state || { from: { pathname: '/dashboard' } };
                history.push(from);
                console.log('checkauth is passed')
            }
        }
        checkAuth();
    });

    const signUpUser = async (e) => {
        if (!state.email || !state.name || !state.password || !state.confirmPassword) {
            setState({ ...state, alert: 'Please complete all fields' });
            return;
        } else if (state.password !== state.confirmPassword) {
            setState({ ...state, alert: 'Passwords don\'t match' });
            return;
        }

        Auth.signUp(state.name, state.email, state.password, () => {
            context.handleLogin();
        });
    }

    const handleForm = async (e) => {
        await setState({ ...state, [e.target.name]: e.target.value });
    }

    return <div>
        {state.alert ? state.alert : null}
        <h2>Sign Up</h2>
        <div className='login-form'>
            <input type="text" placeholder='First Name' name='name' className='login-field' onChange={e => handleForm(e)}/>
            <input type="text" placeholder='Email' name='email' className='login-field' onChange={e => handleForm(e)}/>
            <input type="password" placeholder='Password' name='password' className='login-field' onChange={e => handleForm(e)}/>
            <input type="password" placeholder='Confirm Password' name='confirmPassword' className='login-field' onChange={e => handleForm(e)}/>
            <button className='solid-button' onClick={() => signUpUser()}>Sign Up</button>
            <h5>Already have an account? <Link to='/login'><b>Login</b></Link></h5>
        </div>
    </div>
    
}
export default Signup;
