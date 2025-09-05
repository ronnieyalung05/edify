import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/sign-up-page';
import CheckEmailPage from './pages/check-email-page';
import SignInPage from './pages/sign-in-page'; // optional
import LandingPage from './pages/landing-page';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/checkemail" element={<CheckEmailPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App
