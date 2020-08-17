import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from './components/auth/AuthContext';
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
        <Router>
            <div className='full-width'>
              <AuthContext>
                <Switch>
                  {useContext(AuthContext) ? <ProtectedRoutes/> : null}
                  <Route exact path='/' component={Landing}/>
                  <Route path='/login' component={Login}/>
                  <Route path='/signup' component={Signup}/>
                </Switch>
              </AuthContext>
            </div>
        </Router>
    </div>
  );
}

export default App;
