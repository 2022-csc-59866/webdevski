import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobFeed from './pages/JobFeed';
import SplashHome from './pages/SplashHome';
import NavBar from './components/NavBar';
import StackDevski from './pages/StackDevski';
import Register from './pages/Register'
import { supabase } from "./server/client.js"
import Login from './components/Login';
import Success from './components/Success';

import JobFeedCreatePost from './pages/JobFeedCreatePost'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<SplashHome/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/success" element={<Success/>}/>
          <Route path="/job-feed" element={<JobFeed/>} />
          <Route path="/new" element={<JobFeedCreatePost/>} />
          <Route path="/stackDevski" element={<StackDevski/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
