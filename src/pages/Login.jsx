import React, { useRef } from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import Context from '../utils/Context';
import Auth from '../utils/Auth';
import { gsap } from 'gsap';

function Login() {
    const [state, setState] = React.useState({
        email: '',
        password: '',
        alert: '',
    });

    const context = React.useContext(Context);
    React.useEffect(()=> {
        console.log(context.authState)
        checkAuth()
    },[context]);
    
    let location = useLocation();
    let history = useHistory();
    // // Handle on page load GSAP animations
    // React.useEffect(() => {
    //     let timeline = gsap.timeline();
    //     timeline.from(headingRef, .5, {y: -50, ease: 'power3', opacity: 0});
    //     timeline.from(loginRef, .5, {opacity: 0}, '-=.5')
    // });

    // Change state of email and password fields when user types. Async to have accurate text body when console.log()
    const handleForm = async event => {
        await setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    // Verify all fields filled and login
    const handleLogin = (email, password) => {
        if (!email || !password) {
            setState({ ...state, alert: 'Missing email or password' });
            return;
        }
        
        Auth.login(email, password, () => {
            context.handleLogin();
        });
    }

    const checkAuth = () => {
        if (context.authState) {
            let { from } = location.state || { from: { pathname: '/dashboard' } };
            history.push('/dashboard');
            console.log('checkauth is passed')
        }
    }

    return <div>
        {state.alert ? state.alert : null}
        <h2>Login</h2>
        <div className='login-form'>
            <input type="text" placeholder='Email' name='email' className='login-field' onChange={e => handleForm(e)}/>
            <input type="password" placeholder='Password' name='password' className='login-field' onChange={e => handleForm(e)}/>
            <button className='login-button' onClick={() => handleLogin(state.email, state.password)}>Login</button>
            <h5>Don't have an account? <Link to='/signup'><b>Sign Up</b></Link></h5>
        </div>
    </div>
}
export default Login;
