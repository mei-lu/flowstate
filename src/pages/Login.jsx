import React, { useRef } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Context from '../utils/Context';
import Auth from '../utils/Auth';
import { gsap } from 'gsap';
import { ReactComponent as BackButton } from '../img/auth/backbutton.svg';

function Login() {
    const [state, setState] = React.useState({
        email: '',
        password: '',
        alert: '',
    });

    let location = useLocation();
    let history = useHistory();
    const context = React.useContext(Context);

    // Refs for GSAP animations
    let headingRef = useRef(null);
    let loginRef = useRef(null);

    React.useEffect(()=> {
        let timeline = gsap.timeline();
        timeline.from(headingRef, .5, {y: -50, ease: 'power3', opacity: 0});
        timeline.from(loginRef, .5, {opacity: 0}, '-=.5')

        const checkAuth = () => {
            if (context.authState) {
                let { from } = location.state || { from: { pathname: '/dashboard' } };
                history.push(from);
                console.log('checkauth is passed')
            }
        }
        checkAuth();
    });

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

    return <div className='login-wrapper'>
        {state.alert ? state.alert : null}
        <div className='back-button'><Link to='/'><BackButton height={40} /></Link></div>
        <h2 ref={e => headingRef = e}>Login</h2>
        <div className='login-form' ref={e => loginRef = e}>
            <input type="text" placeholder='Email' name='email' className='login-field' onChange={e => handleForm(e)}/>
            <input type="password" placeholder='Password' name='password' className='login-field' onChange={e => handleForm(e)}/>
            <button className='solid-button' onClick={() => handleLogin(state.email, state.password)}>Login</button>
            <h5>Don't have an account? <Link to='/signup'><b>Sign Up</b></Link></h5>
        </div>
    </div>
}
export default Login;
