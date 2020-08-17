import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Pomodoro from './components/pomodoro/Pomodoro';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navigation from './components/sidebar/Navigation';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Kanban from './pages/Kanban';
import Schedule from './pages/Schedule';

const AuthContext = React.createContext(false);

function App() {
  return (
    <div className="App">
        <Router>
          <Navigation />
            <div className='full-width'>
              <Switch>
                <Route exact path='/' component={Landing}/>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={Signup}/>
                
                <AuthContext.Provider value={true}>
                <Route path='/tasks' component={Kanban}/>
                <Route path='/schedule' component={Schedule}/>
                <Route path='/pomodoro' component={Pomodoro}/>
                <Route path='/dashboard' component={Dashboard}/>
                </AuthContext.Provider>
              </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
