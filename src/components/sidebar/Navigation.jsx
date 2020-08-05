import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import Logo from '../Logo';
import DashboardIcon from '../../img/dashboard.svg';
import TasksIcon from '../../img/tasks.svg';
import CalendarIcon from '../../img/calendar.svg';
import TimerIcon from '../../img/timer.svg';
import LogoutIcon from '../../img/logout.svg';
class Navigation extends React.Component {
    render() {
        return <div className='nav-labels'>
            <div className='logo'><Logo/></div>
            <Link to='/dashboard'><img className='logo-img' src={DashboardIcon} alt=''/></Link>
            <Link to='/tasks'><img className='logo-img' src={TasksIcon} alt=''/></Link>
            <Link to='/schedule'><img className='logo-img' src={CalendarIcon} alt=''/></Link>
            <Link to='/pomodoro'><img className='logo-img' src={TimerIcon} alt=''/></Link>
            <Link to='/login'><img className='logo-img' src={LogoutIcon} alt=''/></Link>
        </div>
    }
}

export default withRouter(Navigation);