  import { GoogleLogin } from '@react-oauth/google';
  import jwt_decode from 'jwt-decode';
  import { loginUser, googleLogin } from '../services/api';
  import { useAuth } from '../context/AuthContext';
  import { useState } from 'react';
  import { useNavigate, Link } from 'react-router-dom';
  import './Auth.css';

  export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await loginUser({ email, password });

    // save user + token in localStorage
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    login(res.data); // update context
    navigate("/dashboard");
  } catch (err) {
    alert(err.response?.data?.message || "Invalid credentials");
  }
};


    const handleGoogleSuccess = async (res) => {
      const decoded = jwt_decode(res.credential);
      try {
        const response = await googleLogin({
          email: decoded.email,
          googleId: decoded.sub,
          name: decoded.name
        });
        login(response.data);
        navigate('/dashboard');
      } catch (err) {
        alert(err.response?.data?.message || 'Google login failed');
      }
    };

    return (
      <div className="auth-container">
        <div className="auth-card">
          <h2>Welcome Back 🚀</h2>
          <GoogleLogin 
            onSuccess={handleGoogleSuccess} 
            onError={() => alert('Google login failed')} 
          />
          <div className="divider">or</div>
          <form onSubmit={handleSubmit} className="auth-form">
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <button type="submit">Login</button>
          </form>
          <p>
            Don’t have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    );
  }
