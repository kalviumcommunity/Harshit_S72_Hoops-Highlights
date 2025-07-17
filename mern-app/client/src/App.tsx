import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hoops & Highlights</h1>
          <nav style={{ margin: '1rem' }}>
            <Link to="/" style={{ margin: '0 1rem', color: '#61dafb' }}>Home</Link>
            <Link to="/login" style={{ margin: '0 1rem', color: '#61dafb' }}>Login</Link>
            <Link to="/signup" style={{ margin: '0 1rem', color: '#61dafb' }}>Signup</Link>
          </nav>
          <Routes>
            <Route path="/" element={<p>Welcome to Hoops & Highlights! Edit <code>src/App.tsx</code> and save to reload.</p>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
