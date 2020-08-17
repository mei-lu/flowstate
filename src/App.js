import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from './components/auth/AuthContext';
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';

function App() {

  const [authStatus, setAuthStatus] = React.useState(false);

  return (
    <div className="App">
        <Router>
            <div className='full-width'>
              <AuthContext.Provider value={{authStatus, setAuthStatus}}>
                <Switch>
                  {/* Public routes */}
                  <Route exact path='/' component={Landing}/>
                  <Route path='/login' component={Login}/>
                  <Route path='/signup' component={Signup}/>
                  
                  {/* Private Routes */}
                  {authStatus ? <ProtectedRoutes/> : <Redirect to='/login'/>}
                  <Route component={Landing}/>
                </Switch>
              </AuthContext.Provider>
            </div>
        </Router>
    </div>
  );
}

export default App;
