import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/navigation/ProtectedRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import Profile from './utils/Profile';
import Dashboard from './pages/Dashboard';
import Navigation from './components/navigation/Navigation';

function App() {
  
  return (
    <div className="App">
        <Router>
            <div className='full-width'>
              <Switch>
                {/* Public routes */}
                <Route exact path='/' component={Landing}/>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={Signup}/>

                {/* Private Routes */}
                {/* <Navigation /> */}
                <ProtectedRoute path='/dashboard' component={Dashboard}/>
              </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
