import React from 'react';
import {Link, Redirect, useHistory} from 'react-router-dom';
import Logo from '../Logo';
import DashboardIcon from '../../img/dashboard.svg';
import TasksIcon from '../../img/tasks.svg';
import CalendarIcon from '../../img/calendar.svg';
import TimerIcon from '../../img/timer.svg';
import LogoutIcon from '../../img/logout.svg';
import Profile from '../../utils/Profile';

function Navigation () {
    let history = useHistory();

    return <div className='nav-wrapper'>
        <div className='nav'>
            <div className='logo'><Logo/></div>
            <Link to='/dashboard'><img className='nav-icons' src={DashboardIcon} alt=''/></Link>
            <Link to='/tasks'><img className='nav-icons' src={TasksIcon} alt=''/></Link>
            <Link to='/schedule'><img className='nav-icons' src={CalendarIcon} alt=''/></Link>
            <Link to='/pomodoro'><img className='nav-icons' src={TimerIcon} alt=''/></Link>
            <img className='nav-icons' src={LogoutIcon} alt='' onClick={ 
                Profile.logout(() => {
                history.replace('/');
                })}/>
        </div>
    </div>
}

export default Navigation;