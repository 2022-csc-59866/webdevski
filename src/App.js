import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobFeed from './components/JobFeed';
import HomeWrapper from './HomeWrapper';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeWrapper/>} />
          <Route path="/job-feed" element={<JobFeed/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
