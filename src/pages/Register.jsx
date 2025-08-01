import React, { useState } from 'react';
import API from '../services/api';

export default function Register() {
  const [form, setForm] = useState({
    first_name: '', last_name: '', username: '',
    email: '', dob: '', languages: '',
    country: '', state: '', city: ''
  });
  const [msg, setMsg] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await API.post('/register', form);
      setMsg('Check your email to set password');
    } catch (err) {
      setMsg(err.response?.data?.message || 'Error occurred');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((field, i) => (
          <input key={i} name={field} placeholder={field} onChange={handleChange} required />
        ))}
        <button type="submit">Register</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
