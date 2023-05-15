import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobFeed from './pages/JobFeed';
import SplashHome from './pages/SplashHome';
import NavBar from './components/NavBar';
import StackDevski from './pages/StackDevski';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<SplashHome/>} />
          <Route path="/job-feed" element={<JobFeed/>} />
          <Route path="/stackDevski" element={<StackDevski/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
