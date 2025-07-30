import React from 'react';

export default function LogIn() {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Log In</h2>
      <input className="border p-2 w-full max-w-md rounded mb-4" type="email" placeholder="Email" />
      <input className="border p-2 w-full max-w-md rounded mb-4" type="password" placeholder="Password" />
      <button className="bg-blue-600 text-white px-6 py-2 rounded w-full max-w-md">Log In</button>
    </div>
  );
}

