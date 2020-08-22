import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../Logo';
import DashboardIcon from '../../img/dashboard.svg';
import TasksIcon from '../../img/tasks.svg';
import CalendarIcon from '../../img/calendar.svg';
import TimerIcon from '../../img/timer.svg';
import LogoutIcon from '../../img/logout.svg';
import Context from '../../utils/Context';
import Auth from '../../utils/Auth';

function Navigation () {
    let history = useHistory();
    const context = React.useContext(Context);
    
    return(
        <div className='nav'>
            {/* <div className='logo'><Logo/></div> */}
            <Link to='/dashboard'><img className='nav-icons' src={DashboardIcon} alt=''/></Link>
            <Link to='/tasks'><img className='nav-icons' src={TasksIcon} alt=''/></Link>
            <Link to='/schedule'><img className='nav-icons' src={CalendarIcon} alt=''/></Link>
            <Link to='/pomodoro'><img className='nav-icons' src={TimerIcon} alt=''/></Link>
            <div onClick={() => {
                Auth.logout(()=> {
                    context.handleLogout();
                    history.push('/');
                });
            }}><img className='nav-icons' src={LogoutIcon} alt='' /></div>
        </div>
    );
}

export default Navigation;