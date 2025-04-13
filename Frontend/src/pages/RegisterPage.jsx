import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: '' });
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('/api/register', form);
      navigate('/');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-red">Register</h2>
      <input type="text" placeholder="Name" className="input" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input type="email" placeholder="Email" className="input" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" className="input" onChange={e => setForm({ ...form, password: e.target.value })} />
      <select className="input" onChange={e => setForm({ ...form, role: e.target.value })}>
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="staff">Staff</option>
        <option value="admin">Admin</option>
      </select>
      <button className="btn" onClick={handleRegister}>Register</button>
    </div>
  );
}
