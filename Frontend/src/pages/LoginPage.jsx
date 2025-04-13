import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await axios.post('/api/login', credentials);
    const { role } = res.data;
    navigate('/dashboard', { state: { role } });
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Login</h2>
      <input type="email" placeholder="Email" className="input" onChange={e => setCredentials({ ...credentials, email: e.target.value })} />
      <input type="password" placeholder="Password" className="input" onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
      <button className="btn" onClick={handleLogin}>Login</button>
    </div>
  );
}
