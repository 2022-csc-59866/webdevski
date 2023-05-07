import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobFeed from './components/JobFeed';
import SplashHome from './components/SplashHome';
import NavBar from './components/NavBar';
import StackDevski from './components/StackDevski';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeWrapper/>} />
          <Route path="/job-feed" element={<JobPage/>} />
          <Route path="/stackDevski" element={<StackDevski/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
