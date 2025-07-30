// src/pages/Subscription.tsx
import React from 'react';

export default function Subscription() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Subscription</h2>
      <p className="text-gray-700 mb-4">You're currently subscribed to the Smish-It protection plan.</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2">Manage Subscription</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded">Cancel Subscription</button>
    </div>
  );
}