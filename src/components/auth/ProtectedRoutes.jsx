import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Kanban from '../../pages/Kanban';
import Schedule from '../../pages/Schedule';
import Pomodoro from '../pomodoro/Pomodoro';
import Navigation from '../sidebar/Navigation';


function ProtectedRoutes() { 
    return <div> <Navigation />
        <Route path='/tasks' component={Kanban}/>
        <Route path='/schedule' component={Schedule}/>
        <Route path='/pomodoro' component={Pomodoro}/>
        <Route path='/dashboard' component={Dashboard}/>
    </div>
}

export default ProtectedRoutes;