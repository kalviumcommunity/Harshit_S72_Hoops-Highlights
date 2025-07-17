import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add authentication logic here
    alert(`Logged in as ${email}`);
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Hoops & Highlights Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label><br />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', padding: 8 }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Password:</label><br />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '100%', padding: 8 }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: 10, background: '#282c34', color: '#fff', border: 'none', borderRadius: 4 }}>Login</button>
      </form>
    </div>
  );
};

export default Login; 