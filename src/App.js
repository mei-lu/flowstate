import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Pomodoro from './pages/Pomodoro';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import StarrySky from './components/StarrySky';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Kanban from './pages/Kanban';

function App() {
  return (
    <div className="App">
      <Logo/>
            <Router>
              <Navigation />
              <Switch>
                <div className="Contents">
                <Route exact path='/' component={Landing}/>
                <Route path='/tasks' component={Kanban}/>
                <Route path='/pomodoro' component={Pomodoro}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={Signup}/>
                </div>
              </Switch>
            </Router>
        <StarrySky />
    </div>
  );
}

export default App;
