import { useState } from 'react';
import { registerUser } from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
//   const [photo, setPhoto] = useState(null); 
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
  e.preventDefault();

  try {
    // Instead of FormData, send a plain object
    const userData = {
      name,
      email,
      password,
      phone,
      linkedin,
      github,
    };

    const res = await registerUser(userData); // Make sure this uses axios.post(url, data)
    alert("Registered successfully!");
    navigate("/login");
  } catch (err) {
    console.log(err.response?.data);
    alert(err.response?.data?.message || "Registration failed");
  }
};


  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleRegister} className="auth-form" encType="multipart/form-data">
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input type="url" placeholder="LinkedIn URL" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
          <input type="url" placeholder="GitHub URL" value={github} onChange={(e) => setGithub(e.target.value)} />
          {/* <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} /> */}
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
