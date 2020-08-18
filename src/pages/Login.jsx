import React, { useRef } from 'react';
import { AuthContext } from '../components/auth/AuthContext';
import { Link, Redirect } from 'react-router-dom';
import { gsap } from 'gsap';

function Login() {
    const [state, setState] = React.useState({
        email: '',
        password: '',
        alert: '',
        redirect: null
    });

    //Set context to update global authentication state
    const { authStatus, setAuthStatus } = React.useContext(AuthContext);
    console.log(authStatus);

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

    // POST login information
    const handleLogin = async (email, password) => {
        if (!email || !password) {
            setState({...state, alert: 'Missing email or password'});
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
                setState({alert: 'Incorrect email or password'});
                return;
            }  else {
                setAuthStatus(true);
                setState({redirect: 'dashboard'});
            }
        })
    }

    return <div>
        {state.redirect ? <Redirect to={state.redirect}/> : null}
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
