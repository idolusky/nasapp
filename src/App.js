import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Container from './components/Container';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-links">
          <NavBar />
        </div>
        <Container />
      </div>
    </Router>
  );
}

export default App;
