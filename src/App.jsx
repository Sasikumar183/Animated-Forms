import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './assets/component/Login';
import Signup from './assets/component/Signup';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const App = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
