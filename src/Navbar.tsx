import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-around',
      padding: '1rem',
      backgroundColor: '#e0e7ff', // Tailwind's indigo-100
      fontWeight: 'bold'
    }}>
      <Link to="/">Home</Link>
      <Link to="/add-members">Add Members</Link>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/payment">Payment</Link>
      <Link to="/subscription">Subscription</Link>
    </nav>
  );
}
