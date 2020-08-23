import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/navigation/ProtectedRoute';
import ContextState from './utils/ContextState';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Kanban from './pages/Kanban';
import Schedule from './pages/Schedule';
import Timer from './pages/Timer';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
              <ContextState>
                {/* Public routes */}
                <Route exact path='/' component={Landing}/>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={Signup}/>

                {/* Private Routes */}
                <ProtectedRoute path='/dashboard' component={Dashboard}/>
                <ProtectedRoute path='/kanban' component={Kanban}/>
                <ProtectedRoute path='/timer' component={Timer}/>
                <ProtectedRoute path='/schedule' component={Schedule}/>
              </ContextState>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
