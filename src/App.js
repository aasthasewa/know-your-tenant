import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';

export default function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);

  const navigate = (target) => setPage(target);

  const handleLogin = (email) => {
    setUser({ email, name: 'Tirth Mali' });
    setPage('dashboard');
  };

  const handleSignup = (data) => {
    setUser({ email: data.email, name: `${data.firstName} ${data.lastName}` });
    setPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setPage('home');
  };

  if (page === 'home') return <HomePage onNavigate={navigate} />;
  if (page === 'login') return <LoginPage onLogin={handleLogin} onNavigate={navigate} />;
  if (page === 'signup') return <SignupPage onSignup={handleSignup} onNavigate={navigate} />;
  if (page === 'dashboard') return <DashboardPage user={user} onLogout={handleLogout} />;
  return <HomePage onNavigate={navigate} />;
}