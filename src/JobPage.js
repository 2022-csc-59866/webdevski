import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import JobFeed from './components/JobFeed';

function JobPage() {
    return (
        <>
            <NavBar />
            <JobFeed />
        </>
    );
}

export default JobPage;