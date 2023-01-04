import React from 'react';
import './App.css';
import Drawer from './dashboard/component/Drawer';
import Dashboard from './dashboard/Dashboard.js';

function App() {
  return (
    <div className="App">
      <Drawer/>
      <Dashboard/>
    </div>
  );
}

export default App;