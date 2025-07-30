// src/pages/Payment.tsx
import React from 'react';

export default function Payment() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Payment</h2>
      <p className="text-gray-700 mb-4">Enter your payment details below to continue your subscription.</p>
      <input className="border p-2 w-full rounded mb-4" type="text" placeholder="Card Number" />
      <input className="border p-2 w-full rounded mb-4" type="text" placeholder="MM/YY" />
      <input className="border p-2 w-full rounded mb-4" type="text" placeholder="CVC" />
      <button className="bg-blue-600 text-white px-6 py-2 rounded">Submit Payment</button>
    </div>
  );
}