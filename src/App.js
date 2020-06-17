import React from 'react';
import './App.css';
import Pomodoro from './components/Pomodoro.jsx';
import Navigation from './components/Navigation.jsx';
import Level from './components/Level.jsx';
import StarrySky from './components/StarrySky.jsx';

function App() {
  return (
    <div className="App">
      <Navigation />
        <div className="Contents">
          <Level />
        <Pomodoro />
        </div>
        <StarrySky />
    </div>
  );
}

export default App;
