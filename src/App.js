import React from 'react';
import './App.css';
import Pomodoro from './components/Pomodoro';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import StarrySky from './components/StarrySky';

function App() {
  return (
    <div className="App">
      <Logo />
      <Navigation />
        <div className="Contents">
        <Pomodoro />
        </div>
      <StarrySky />
    </div>
  );
}

export default App;
