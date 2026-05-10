import React, { useState } from 'react';

const navItems = [
  { label: 'Dashboard', icon: 'dashboard', key: 'dashboard' },
  { label: 'Assign Field Agent', icon: 'person_add', key: 'assign', hasArrow: true },
  { label: 'Pending Cases', icon: 'pending_actions', key: 'pending' },
  { label: 'Reassign Cases', icon: 'sync_alt', key: 'reassign' },
  { label: 'Review Cases', icon: 'rate_review', key: 'review' },
  { label: 'Completed Cases', icon: 'task_alt', key: 'completed' },
];

const statusCards = [
  { label: 'PENDING', color: '#e06c00', bgColor: '#fff3e8' },
  { label: 'REVIEW', color: '#005eb8', bgColor: '#e8f0fb' },
  { label: 'REASSIGN', color: '#7b3fe4', bgColor: '#f0e8fc' },
  { label: 'ASSIGNED', color: '#006b5e', bgColor: '#e8f5f3' },
];

function formatDate(d) {
  const dd = String(d.getDate()).padStart(2,'0');
  const mm = String(d.getMonth()+1).padStart(2,'0');
  const yyyy = d.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}

export default function DashboardPage({ user, onLogout }) {
  const [activeNav, setActiveNav] = useState('dashboard');

  const today = new Date();
  const weekAgo = new Date(today); weekAgo.setDate(today.getDate() - 7);

  const [fromDate, setFromDate] = useState(formatDate(weekAgo));
  const [toDate, setToDate] = useState(formatDate(today));

  const sidebarStyle = {
    width: '270px', minHeight: '100vh', background: '#f9faf5',
    borderRight: '1px solid #e2e3df', display: 'flex', flexDirection: 'column',
    position: 'fixed', top: 0, left: 0,
  };

  const mainStyle = {
    marginLeft: '270px', flex: 1, background: '#f9faf5', minHeight: '100vh',
    fontFamily: 'Inter, sans-serif',
  };

  return (
    <div style={{ display: 'flex', fontFamily: 'Inter, sans-serif' }}>
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        {/* Logo */}
        <div style={{ padding: '28px 24px 20px', borderBottom: '1px solid #e2e3df' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '28px', color: '#1a1c1a', fontVariationSettings: "'FILL' 1" }}>shield_lock</span>
            <div>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: '700', fontSize: '15px', color: '#1a1c1a', lineHeight: '1.2' }}>KNOW YOUR<br />TENANT</p>
              <p style={{ fontSize: '10px', fontWeight: '600', color: '#74777d', letterSpacing: '0.08em', marginTop: '2px' }}>CRE MANAGEMENT</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '16px 12px' }}>
          {navItems.map(item => (
            <button
              key={item.key}
              onClick={() => setActiveNav(item.key)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
                padding: '12px 14px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                fontSize: '14px', fontWeight: '500', fontFamily: 'Inter, sans-serif',
                background: activeNav === item.key ? '#e8e8e4' : 'transparent',
                color: '#1a1c1a', marginBottom: '4px', textAlign: 'left',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#1a1c1a' }}>{item.icon}</span>
                {item.label}
              </div>
              {item.hasArrow && <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#74777d' }}>chevron_right</span>}
            </button>
          ))}
        </nav>

        {/* Location */}
        <div style={{ padding: '12px' }}>
          <button style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e3df', background: '#fff', cursor: 'pointer', fontSize: '14px', color: '#1a1c1a', fontFamily: 'Inter, sans-serif', marginBottom: '8px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>location_on</span>
            Location
          </button>
          {/* User */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px', background: '#f3f4f0', borderRadius: '8px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#e2e3df', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#44474c' }}>person</span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: '13px', fontWeight: '600', color: '#1a1c1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user?.name || 'User'}</p>
              <p style={{ fontSize: '12px', color: '#74777d', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user?.email || ''}</p>
            </div>
            <button onClick={onLogout} title="Logout" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#74777d', display: 'flex', alignItems: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={mainStyle}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '28px 40px 20px', borderBottom: '1px solid #e2e3df', background: '#f9faf5' }}>
          <h1 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '28px', fontWeight: '600', color: '#1a1c1a' }}>CRE Dashboard</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#fff', border: '1px solid #e2e3df', borderRadius: '6px', padding: '8px 14px' }}>
              <input
                type="text"
                value={fromDate}
                onChange={e => setFromDate(e.target.value)}
                style={{ border: 'none', outline: 'none', fontSize: '14px', color: '#1a1c1a', background: 'transparent', width: '90px', fontFamily: 'Inter, sans-serif' }}
              />
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#44474c' }}>calendar_today</span>
            </div>
            <span style={{ fontSize: '14px', color: '#44474c' }}>to</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#fff', border: '1px solid #e2e3df', borderRadius: '6px', padding: '8px 14px' }}>
              <input
                type="text"
                value={toDate}
                onChange={e => setToDate(e.target.value)}
                style={{ border: 'none', outline: 'none', fontSize: '14px', color: '#1a1c1a', background: 'transparent', width: '90px', fontFamily: 'Inter, sans-serif' }}
              />
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#44474c' }}>calendar_today</span>
            </div>
            <button style={{ background: '#0D1B2A', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
              Apply
            </button>
          </div>
        </div>

        {/* Status Cards */}
        <div style={{ padding: '32px 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {statusCards.map(card => (
              <div key={card.label} style={{ background: '#fff', border: '1px solid #e2e3df', borderRadius: '10px', padding: '24px 28px', boxShadow: '0 1px 4px rgba(13,27,42,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: card.color }} />
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#44474c', letterSpacing: '0.06em' }}>{card.label}</span>
                </div>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '48px', fontWeight: '700', color: '#1a1c1a', lineHeight: '1' }}>0</p>
              </div>
            ))}
          </div>

          {/* Empty state message */}
          {activeNav === 'dashboard' && (
            <div style={{ marginTop: '48px', textAlign: 'center', color: '#74777d' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#c4c6cc', display: 'block', marginBottom: '12px' }}>inbox</span>
              <p style={{ fontSize: '15px' }}>No cases found for the selected date range.</p>
              <p style={{ fontSize: '13px', marginTop: '4px' }}>Adjust the date filter or check back later.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}