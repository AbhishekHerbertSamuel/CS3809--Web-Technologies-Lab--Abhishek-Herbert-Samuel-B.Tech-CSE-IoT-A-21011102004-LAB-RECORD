// src/App.js
import React from 'react';
import './App.css';
import LabradorList from './components/LabradorList';
import labradors from './data/labradors'; // Import the labradors data
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Labrador Types</h1>
        <Routes>
          <Route path="/" element={<LabradorList labradors={labradors} />} /> {/* Pass labradors data as a prop */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


