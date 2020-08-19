import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { AuthContext } from './components/auth/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import Profile from './utils/Profile';
import Dashboard from './pages/Dashboard';
import Navigation from './components/sidebar/Navigation';

function App() {
  // const [authStatus, setAuthStatus] = React.useState(false);
  
// Verify if JWT is validated in order to persist users on refresh
  useEffect(() => {
    Profile.verify(async () => {
      await console.log('auth status', Profile.authenticated);
    });
  }, []);

  return (
    <div className="App">
        <Router>
            <div className='full-width'>
              {/* <AuthContext.Provider value={{authStatus, setAuthStatus}}> */}
                <Switch>
                  {/* Public routes */}
                  <Route exact path='/' component={Landing}/>
                  <Route path='/login' component={Login}/>
                  <Route path='/signup' component={Signup}/>

                  {/* Private Routes */}
                  {/* <Navigation /> */}
                  <ProtectedRoute path='/dashboard' component={Dashboard}/>
                </Switch>
              {/* </AuthContext.Provider> */}
            </div>
        </Router>
    </div>
  );
}

export default App;
