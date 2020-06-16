import React from 'react';
import './App.css';
import Pomodoro from './components/Pomodoro.jsx';
import Navigation from './components/Navigation.jsx';

function App() {
  return (
    <div className="App">
      <Navigation />
        <div className="Contents">
        <Pomodoro />
        </div>
    </div>
  );
}

export default App;
