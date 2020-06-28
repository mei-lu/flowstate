import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Pomodoro from './pages/Pomodoro';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import StarrySky from './components/StarrySky';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo/>
        <div className="Contents">
        <Router>
        <Pomodoro path='/'/>
        {/* <Dashboard path='/dashboard'/> */}
      </Router>
        </div>
      <StarrySky />
    </div>
  );
}

export default App;
