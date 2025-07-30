// src/pages/AddMembers.tsx
import React, { useState } from 'react';

export default function AddMembers() {
  const [email, setEmail] = useState('');
  const [members, setMembers] = useState<string[]>([]);

  const handleAdd = () => {
    if (email && !members.includes(email)) {
      setMembers([...members, email]);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Add Family Members</h2>
      <input
        className="border p-2 w-full rounded mb-2"
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded">Send Invite</button>
      <ul className="mt-4">
        {members.map((m, i) => (
          <li key={i} className="text-gray-700">{m}</li>
        ))}
      </ul>
    </div>
  );
}
