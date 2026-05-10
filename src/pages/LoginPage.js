import React, { useState } from 'react';

export default function LoginPage({ onLogin, onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) { setError('Please fill in all fields.'); return; }
    onLogin(email);
  };

  const inputStyle = {
    width: '100%', padding: '12px 12px 12px 44px',
    border: '1px solid #c4c6cc', borderRadius: '4px',
    fontSize: '16px', background: '#f3f4f0', color: '#1a1c1a',
    outline: 'none', fontFamily: 'Inter, sans-serif',
  };

  return (
    <div style={{ background: '#f9faf5', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'Inter, sans-serif' }}>
      <main style={{ width: '100%', maxWidth: '440px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Back to Home */}
        <button
          onClick={() => onNavigate('home')}
          style={{
            alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '6px',
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '14px', fontWeight: '500', color: '#44474c',
            marginBottom: '24px', padding: '0',
            position: 'sticky', top: '20px', zIndex: 1,
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
          Back to Home
        </button>

        {/* Brand */}
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#000', display: 'block', marginBottom: '8px', fontVariationSettings: "'FILL' 1" }}>shield_lock</span>
          <h1 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '32px', fontWeight: '600', color: '#000' }}>KnowYourTenant</h1>
        </div>

        {/* Card */}
        <div style={{ width: '100%', background: '#fff', border: '1px solid #e2e3df', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 20px rgba(13,27,42,0.03)' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '24px', fontWeight: '600', color: '#1a1c1a', marginBottom: '8px' }}>Secure Login</h2>
            <p style={{ fontSize: '16px', color: '#44474c' }}>Access your verification dashboard</p>
          </div>

          {error && <div style={{ background: '#ffdad6', color: '#93000a', padding: '12px', borderRadius: '4px', marginBottom: '16px', fontSize: '14px' }}>{error}</div>}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Email */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#44474c', marginBottom: '8px' }}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <span className="material-symbols-outlined" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(68,71,76,0.5)', fontSize: '20px', pointerEvents: 'none' }}>mail</span>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="name@property.com" style={inputStyle} required />
              </div>
            </div>

            {/* Password */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#44474c' }}>Password</label>
                <button type="button" style={{ background: 'none', border: 'none', fontSize: '12px', fontWeight: '600', color: '#000', cursor: 'pointer' }}>Forgot Password?</button>
              </div>
              <div style={{ position: 'relative' }}>
                <span className="material-symbols-outlined" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(68,71,76,0.5)', fontSize: '20px', pointerEvents: 'none' }}>lock</span>
                <input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" style={{ ...inputStyle, paddingRight: '44px' }} required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#44474c', display: 'flex', alignItems: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            <div style={{ marginTop: '8px' }}>
              <button type="submit" style={{ width: '100%', background: '#000', color: '#fff', border: 'none', padding: '16px', borderRadius: '4px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                Login
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
              </button>
            </div>
          </form>

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: '#44474c' }}>
              New user?{' '}
              <button onClick={() => onNavigate('signup')} style={{ background: 'none', border: 'none', color: '#000', fontWeight: '600', cursor: 'pointer', fontSize: '14px', textDecoration: 'underline' }}>Create an account</button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', fontWeight: '600', color: '#44474c' }}>© 2024 KnowYourTenant. Secure Verification Services.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '8px' }}>
            {['Privacy Policy', 'Security Disclosure'].map(l => (
              <a key={l} href="#" style={{ fontSize: '12px', fontWeight: '600', color: '#44474c', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}