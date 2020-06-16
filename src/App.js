import React from 'react';
import './App.css';
import Pomodoro from './components/Pomodoro.jsx';
import Navigation from './components/Navigation.jsx';
import Level from './components/Level.jsx'

function App() {
  return (
    <div className="App">
      <Navigation />
        <div className="Contents">
          <Level />
        <Pomodoro />
        </div>
    </div>
  );
}

export default App;
