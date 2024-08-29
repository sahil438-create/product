import React, { lazy, Suspense } from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import About from './About';
// import ContactUs from './ContactUs';
// import App from './App';
const Home = lazy(() => import('./App'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./ContactUs'));

function Header() {
  return (
    <Router>
      <div className='Buttons'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>

      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/about'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path='/contact'
          element={
            <Suspense
              fallback={
                <div className='loading'>
                  Loading...
                  <img
                    src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                    alt=''
                  />
                </div>
              }
            >
              <Contact />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default Header;
