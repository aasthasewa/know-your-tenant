import React, { useState } from 'react';

const INDIAN_STATES = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Delhi','Chandigarh'];

const inputStyle = {
  width: '100%', padding: '11px 14px', border: '1px solid #e2e3df',
  borderRadius: '4px', fontSize: '14px', background: '#f9faf5',
  color: '#1a1c1a', outline: 'none', fontFamily: 'Inter, sans-serif',
};

const labelStyle = {
  display: 'block', fontSize: '13px', fontWeight: '500',
  color: '#44474c', marginBottom: '5px',
};

export default function SignupPage({ onSignup, onNavigate }) {
  const [form, setForm] = useState({
    firstName: '', middleName: '', lastName: '', phone: '',
    dob: '', email: '', address1: '', address2: '',
    state: '', city: '', pincode: '', pan: '',
    aadhaar: '', password: '', confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      setError('Please fill all required fields.'); return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.'); return;
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.'); return;
    }
    onSignup(form);
  };

  return (
    <div style={{ background: '#f9faf5', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      {/* Back to Home */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px 40px 0' }}>
        <button
          onClick={() => onNavigate('home')}
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '14px', fontWeight: '500', color: '#44474c', padding: '0',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
          Back to Home
        </button>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '60px', padding: '40px 40px 60px', alignItems: 'start' }}>
        {/* Left Panel */}
        <div style={{ paddingTop: '20px' }}>
          <div style={{ width: '180px', height: '160px', background: 'linear-gradient(135deg, #415A77, #0D1B2A)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '72px', color: '#fff', fontVariationSettings: "'FILL' 1" }}>shield_person</span>
          </div>
          <h1 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '40px', fontWeight: '700', color: '#1a1c1a', lineHeight: '1.15', marginBottom: '16px' }}>Create your owner account</h1>
          <p style={{ fontSize: '14px', color: '#44474c', lineHeight: '1.6', marginBottom: '32px' }}>This secure process helps verify your identity and protects your property. Please ensure all details are accurate.</p>
          {[
            'Government-compliant identity verification',
            'Secure storage of personal information',
            'Quick tenant verification access',
          ].map(item => (
            <div key={item} style={{ border: '1px solid #e2e3df', borderRadius: '6px', padding: '14px 18px', marginBottom: '10px', fontSize: '14px', color: '#1a1c1a' }}>{item}</div>
          ))}
          <p style={{ fontSize: '13px', color: '#44474c', marginTop: '24px' }}>
            Already have an account?{' '}
            <button onClick={() => onNavigate('login')} style={{ background: 'none', border: 'none', color: '#0D1B2A', fontWeight: '600', cursor: 'pointer', fontSize: '13px', textDecoration: 'underline' }}>Login here</button>
          </p>
        </div>

        {/* Right Panel - Form */}
        <div style={{ background: '#fff', border: '1px solid #e2e3df', borderRadius: '12px', padding: '36px', boxShadow: '0 4px 20px rgba(13,27,42,0.04)' }}>
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '24px', fontWeight: '600', color: '#1a1c1a', marginBottom: '24px' }}>Owner Registration</h2>

          {error && <div style={{ background: '#ffdad6', color: '#93000a', padding: '12px', borderRadius: '4px', marginBottom: '16px', fontSize: '13px' }}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={labelStyle}>First Name *</label>
                <input style={inputStyle} value={form.firstName} onChange={e => update('firstName', e.target.value)} required />
              </div>
              <div>
                <label style={labelStyle}>Middle Name</label>
                <input style={inputStyle} value={form.middleName} onChange={e => update('middleName', e.target.value)} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={labelStyle}>Last Name *</label>
                <input style={inputStyle} value={form.lastName} onChange={e => update('lastName', e.target.value)} required />
              </div>
              <div>
                <label style={labelStyle}>Phone *</label>
                <input style={inputStyle} type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} required />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={labelStyle}>Date of Birth *</label>
                <input style={inputStyle} type="date" value={form.dob} onChange={e => update('dob', e.target.value)} required />
              </div>
              <div>
                <label style={labelStyle}>Email *</label>
                <input style={inputStyle} type="email" value={form.email} onChange={e => update('email', e.target.value)} required />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Address Line 1 *</label>
              <input style={inputStyle} value={form.address1} onChange={e => update('address1', e.target.value)} required />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Address Line 2</label>
              <input style={inputStyle} value={form.address2} onChange={e => update('address2', e.target.value)} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={labelStyle}>State *</label>
                <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.state} onChange={e => update('state', e.target.value)} required>
                  <option value="">Select State</option>
                  {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>City *</label>
                <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.city} onChange={e => update('city', e.target.value)} required>
                  <option value="">Select City</option>
                  {form.state === 'West Bengal' && <option>Kolkata</option>}
                  {form.state === 'Maharashtra' && ['Mumbai', 'Pune', 'Nagpur'].map(c => <option key={c}>{c}</option>)}
                  {form.state === 'Karnataka' && ['Bangalore', 'Mysore'].map(c => <option key={c}>{c}</option>)}
                  {form.state === 'Delhi' && <option>New Delhi</option>}
                  {!['West Bengal','Maharashtra','Karnataka','Delhi'].includes(form.state) && form.state && <option value="other">Other</option>}
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={labelStyle}>Pincode *</label>
                <input style={inputStyle} value={form.pincode} onChange={e => update('pincode', e.target.value)} maxLength={6} required />
              </div>
              <div>
                <label style={labelStyle}>PAN Number *</label>
                <input style={inputStyle} value={form.pan} onChange={e => update('pan', e.target.value.toUpperCase())} maxLength={10} placeholder="ABCDE1234F" required />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Aadhaar Number *</label>
              <input style={inputStyle} value={form.aadhaar} onChange={e => update('aadhaar', e.target.value)} maxLength={12} placeholder="XXXX XXXX XXXX" required />
            </div>

            <div style={{ marginBottom: '8px' }}>
              <label style={labelStyle}>Password *</label>
              <div style={{ position: 'relative' }}>
                <input style={{ ...inputStyle, paddingRight: '60px' }} type={showPassword ? 'text' : 'password'} value={form.password} onChange={e => update('password', e.target.value)} required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', color: '#44474c', fontWeight: '500' }}>
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <p style={{ fontSize: '12px', color: '#74777d', marginTop: '5px' }}>Min 8 chars, 1 uppercase, 1 special character</p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={labelStyle}>Confirm Password *</label>
              <input style={inputStyle} type="password" value={form.confirmPassword} onChange={e => update('confirmPassword', e.target.value)} required />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button type="submit" style={{ background: '#0D1B2A', color: '#fff', border: 'none', padding: '14px 32px', borderRadius: '4px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>
                Register Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}