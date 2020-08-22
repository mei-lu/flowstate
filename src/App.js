import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/navigation/ProtectedRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import ContextState from './utils/ContextState';

function App() {
  return (
    <div className="App">
        <Router>
            <div className='full-width'>
              <Switch>
                <ContextState>
                  {/* Public routes */}
                  <Route exact path='/' component={Landing}/>
                  <Route path='/login' component={Login}/>
                  <Route path='/signup' component={Signup}/>

                  {/* Private Routes */}
                  <ProtectedRoute path='/dashboard' component={Dashboard}/>
                </ContextState>
              </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
