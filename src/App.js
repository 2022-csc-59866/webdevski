import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobFeed from './components/JobFeed';
import SplashHome from './components/SplashHome';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<SplashHome />} />
          <Route path="/job-feed" element={<JobFeed/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
