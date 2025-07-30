import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AddMembers from './pages/AddMembers';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Payment from './pages/Payment';
import Subscription from './pages/Subscription';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-members" element={<AddMembers />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="*" element={<div style={{ padding: '2rem' }}>404 - Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
