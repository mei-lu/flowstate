import React from 'react';
import {Link} from 'react-router-dom';
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
            <Link to='/dashboard'><img className='nav-icons' src={DashboardIcon} alt=''/></Link>
            <Link to='/tasks'><img className='nav-icons' src={TasksIcon} alt=''/></Link>
            <Link to='/schedule'><img className='nav-icons' src={CalendarIcon} alt=''/></Link>
            <Link to='/pomodoro'><img className='nav-icons' src={TimerIcon} alt=''/></Link>
            <Link to='/login'><img className='nav-icons' src={LogoutIcon} alt=''/></Link>
        </div>
    }
}

export default Navigation;