import React from 'react';
import './App.css';

import SplashHome from './components/SplashHome';
import NavBar from './components/NavBar';

function HomeWrapper() {
    return (
        <>
            <NavBar />
            <SplashHome />
        </>
    );
}

export default HomeWrapper;