import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import Logo from '../Logo';
import DashboardIcon from '../../img/dashboard.svg';
import TasksIcon from '../../img/tasks.svg';
import CalendarIcon from '../../img/calendar.svg';
import TimerIcon from '../../img/timer.svg';
import LogoutIcon from '../../img/logout.svg';

function Navigation () {

    const [redirect, setRedirect] = React.useState();

    const logout = () => {
        fetch(`${process.env.REACT_APP_API_BASE}/api/logout`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then(response => {
            if (response.ok) {
                setRedirect('/');
            }
        })
    }

    render() {
        return <div className='nav-labels'>
            {redirect ? <Redirect to={redirect} /> : null}
            <div className='logo'><Logo/></div>
            <Link to='/dashboard'><img className='nav-icons' src={DashboardIcon} alt=''/></Link>
            <Link to='/tasks'><img className='nav-icons' src={TasksIcon} alt=''/></Link>
            <Link to='/schedule'><img className='nav-icons' src={CalendarIcon} alt=''/></Link>
            <Link to='/pomodoro'><img className='nav-icons' src={TimerIcon} alt=''/></Link>
            <Link to='/'><img className='nav-icons' src={LogoutIcon} alt='' onClick={logout}/></Link>
        </div>
    }
}

export default Navigation;