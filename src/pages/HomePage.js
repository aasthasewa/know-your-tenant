import React, { useState } from 'react';

const C = {
  primary: '#0D1B2A',
  secondary: '#415A77',
  accent: '#778DA9',
  bg: '#f9faf5',
  bgCard: '#ffffff',
  bgLight: '#f3f4f0',
  border: '#e2e3df',
  text: '#1a1c1a',
  textMuted: '#44474c',
};

const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={C.primary}>
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93-2.67-1.14-5-4.43-5-7.93V7.18L12 5z"/>
  </svg>
);

const Check = ({ color = '#2d6a4f' }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0, marginTop: 3 }}>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
);

const CheckCircle = ({ color = '#2d6a4f', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const PendingIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#b58c00">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
  </svg>
);

const XIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#ba1a1a" style={{ flexShrink: 0, marginTop: 3 }}>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>
);



const plans = [
  {
    name: 'Basic', price: '₹100',
    always: ['1 property included', '1 tenant included'],
    features: ['Name verification', 'Mobile number verification', 'PAN verification', 'Aadhaar verification'],
    bestFor: ['Quick identity checks', 'Low-risk tenants'],
    detail: 'The Basic plan is designed for quick and essential tenant verification. It validates core identity details — name, mobile number, PAN, and Aadhaar — to ensure the tenant is genuine. Ideal for low-risk scenarios where you need a fast and reliable check without going into deeper verification layers.',
  },
  {
    name: 'Basic Pro', price: '₹150',
    always: ['1 property included', '1 tenant included'],
    features: ['Name verification', 'Mobile number verification', 'PAN verification', 'Aadhaar verification', 'Current physical address verification'],
    bestFor: ['Moderate trust scenarios', 'When address confirmation matters'],
    detail: 'The Basic Pro plan enhances standard verification by adding current physical address confirmation. This ensures not only identity authenticity but also confirms where the tenant actually resides — ideal when an extra layer of trust is required before making a rental decision.',
  },
  {
    name: 'Comprehensive', price: '₹200', popular: true,
    always: ['1 tenant included'],
    features: ['Name verification', 'Mobile number verification', 'PAN verification', 'Aadhaar verification', 'Current physical address verification', 'Bank account verification'],
    bestFor: ['Serious landlords', 'Financial credibility checks'],
    detail: 'The Comprehensive plan combines identity and address verification with financial validation. Bank account verification helps assess the tenant\'s financial reliability — making it suitable for landlords who want a more informed and secure onboarding decision.',
  },
  {
    name: 'Comprehensive Pro', price: '₹300',
    always: [],
    features: ['Name verification', 'Mobile number verification', 'PAN verification', 'Aadhaar verification', 'Current physical address verification', 'Bank account verification', 'Court record check', 'Criminal background check'],
    bestFor: ['High-value properties', 'Corporate / high-risk tenants'],
    detail: 'The Comprehensive Pro plan offers the highest level of verification by incorporating legal and risk-based checks. In addition to identity, address, and financial validation, it includes court record and criminal background checks — best suited for high-value properties where maximum assurance is required.',
  },
];

const globalStyles = `
  * { box-sizing: border-box; }
  .card-wrap { perspective: 1000px; }
  .card-inner { position: relative; width: 100%; transition: transform 0.6s cubic-bezier(0.4,0.2,0.2,1); transform-style: preserve-3d; }
  .card-wrap.flipped .card-inner { transform: rotateY(180deg); }
  .card-front, .card-back { backface-visibility: hidden; -webkit-backface-visibility: hidden; border-radius: 10px; box-sizing: border-box; padding: 24px; display: flex; flex-direction: column; width: 100%; }
  .card-back { transform: rotateY(180deg); background: #0D1B2A; position: absolute; top: 0; left: 0; height: 100%; }
  .navbar-inner { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: nowrap; overflow-x: auto; scrollbar-width: none; }
  .navbar-inner::-webkit-scrollbar { display: none; }
  .nav-links { display: flex; gap: 20px; align-items: center; flex-shrink: 0; }
  .nav-actions { display: flex; gap: 8px; align-items: center; flex-shrink: 0; }
  .nav-brand { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
  .pricing-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
  .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
  .steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .trust-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 40px; }
  @media (max-width: 1024px) {
    .pricing-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .nav-links a { font-size: 13px !important; }
  }
  @media (max-width: 768px) {
    .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
    .steps-grid { grid-template-columns: 1fr !important; }
    .pricing-grid { grid-template-columns: 1fr !important; }
    .trust-grid { grid-template-columns: 1fr !important; }
    .comparison-table-wrap { overflow-x: auto; }
    .footer-inner { flex-direction: column !important; gap: 12px !important; text-align: center; }
    .footer-links { flex-wrap: wrap; justify-content: center; }
    .hero-title { font-size: 36px !important; }
    .section-pad { padding: 60px 20px !important; }
  }
  @media (max-width: 480px) {
    .hero-title { font-size: 28px !important; }
    .hero-btns { flex-direction: column !important; }
    .hero-btns button { width: 100%; }
    .nav-links a { font-size: 12px !important; }
    .nav-links { gap: 12px !important; }
  }
`;

function PricingCard({ plan, index, flippedIndex, onFlip }) {
  const isFlipped = flippedIndex === index;
  const allFeatures = [...plan.always, ...plan.features];
  const cardHeight = allFeatures.length > 6 ? 540 : 480;

  return (
    <div className={`card-wrap${isFlipped ? ' flipped' : ''}`} style={{ height: cardHeight }}>
      <div className="card-inner" style={{ height: cardHeight }}>
        <div className="card-front" style={{
          background: C.bgCard, height: cardHeight,
          border: plan.popular ? `2px solid ${C.primary}` : `1px solid ${C.border}`,
        }}>
          {plan.popular && (
            <span style={{ display: 'inline-block', background: C.primary, color: '#fff', fontSize: '11px', fontWeight: '600', padding: '3px 14px', borderRadius: '999px', marginBottom: '10px', alignSelf: 'flex-start', whiteSpace: 'nowrap' }}>
              Most Popular
            </span>
          )}
          <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: '600', fontSize: '16px', color: C.primary, margin: '0 0 2px' }}>{plan.name}</p>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: '700', fontSize: '28px', color: C.primary, margin: '0 0 14px' }}>{plan.price}</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 12px', flex: 1 }}>
            {allFeatures.map((f, fi) => (
              <React.Fragment key={f}>
                {fi === plan.always.length && plan.always.length > 0 && (
                  <hr style={{ border: 'none', borderTop: `1px solid ${C.border}`, margin: '8px 0' }} />
                )}
                <li style={{ display: 'flex', gap: '7px', alignItems: 'flex-start', fontSize: '13px', color: C.text, padding: '3px 0', lineHeight: '1.4' }}>
                  <Check /> {f}
                </li>
              </React.Fragment>
            ))}
          </ul>
          <div style={{ marginBottom: '14px' }}>
            <p style={{ fontSize: '11px', fontWeight: '600', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>Best For</p>
            {plan.bestFor.map(b => <p key={b} style={{ fontSize: '12px', color: C.textMuted, margin: '2px 0' }}>· {b}</p>)}
          </div>
          <button onClick={() => onFlip(index)} style={{ width: '100%', padding: '11px', border: `1px solid ${C.primary}`, borderRadius: '6px', background: 'transparent', cursor: 'pointer', fontSize: '14px', fontWeight: '600', color: C.primary, fontFamily: 'Inter, sans-serif' }}>
            Get more details
          </button>
        </div>
        <div className="card-back" style={{ height: cardHeight }}>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: '600', fontSize: '18px', color: '#fff', margin: '0 0 16px' }}>{plan.name} – Details</p>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.78)', lineHeight: '1.75', flex: 1 }}>{plan.detail}</p>
          <button onClick={() => onFlip(index)} style={{ width: '100%', padding: '12px', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '6px', background: 'transparent', cursor: 'pointer', fontSize: '14px', fontWeight: '600', color: '#fff', fontFamily: 'Inter, sans-serif', marginTop: '20px' }}>
            Back to plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HomePage({ onNavigate }) {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '' });

  const handleFlip = (i) => setFlippedIndex(prev => prev === i ? null : i);

  const btnPrimary = { background: C.primary, color: '#fff', border: 'none', padding: '11px 20px', borderRadius: '6px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' };
  const btnSecondary = { background: 'transparent', color: C.primary, border: `1.5px solid ${C.primary}`, padding: '11px 20px', borderRadius: '6px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' };

  const steps = [
    { num: '1.', title: 'Invite Tenant', desc: 'Generate a secure, single-use link. Your prospective tenant completes a streamlined digital form, uploading necessary documentation directly to our secure vault.', emoji: '👤' },
    { num: '2.', title: 'Algorithmic Verification', desc: 'Our proprietary system cross-references data against national databases, checking legal history, creditworthiness, and identity authenticity within minutes.', emoji: '🔍' },
    { num: '3.', title: 'Actionable Insights', desc: 'Receive a clean, formatted dossier. Make informed leasing decisions based on verified, structured data rather than gut feelings.', emoji: '📋' },
  ];

  const comparisonRows = [
    { aspect: 'Verification Method', typical: 'Manual document review, vulnerable to sophisticated editing', kyt: 'Direct API integrations with secure national databases.' },
    { aspect: 'Turnaround Time', typical: 'Days to weeks of waiting and back-and-forth communication', kyt: 'Minutes to hours for a comprehensive digital dossier' },
    { aspect: 'Accuracy Guarantee', typical: 'Prone to human error, cognitive bias, and forgeable documents', kyt: 'Algorithmic certainty, entirely immune to forged documentation' },
  ];

  const problems = ['Fake identities and stolen profiles used to secure leases', 'Forged financial documents and inflated employment history', 'Undisclosed criminal records or pending legal actions', 'Hidden eviction history from previous properties'];

  return (
    <div style={{ background: C.bg, minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <style>{globalStyles}</style>

      {/* Navbar */}
      <nav style={{ background: C.bgCard, borderBottom: `1px solid ${C.border}`, position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="navbar-inner" style={{ padding: '12px 32px', maxWidth: '1280px', margin: '0 auto' }}>
          <div className="nav-brand">
            <ShieldIcon />
            <span style={{ fontFamily: 'Manrope, sans-serif', fontWeight: '700', fontSize: '15px', color: C.primary, whiteSpace: 'nowrap' }}>KnowYourTenant</span>
          </div>
          <div className="nav-links">
            {['How it Works', 'Pricing', 'About Us', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} style={{ color: C.textMuted, textDecoration: 'none', fontSize: '14px', fontWeight: '500', whiteSpace: 'nowrap' }}>{item}</a>
            ))}
          </div>
          <div className="nav-actions">
            <button style={{ ...btnSecondary, padding: '8px 16px', fontSize: '13px' }} onClick={() => onNavigate('login')}>Login</button>
            <button style={{ ...btnPrimary, padding: '8px 16px', fontSize: '13px' }} onClick={() => onNavigate('signup')}>Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="section-pad" style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 48px 60px' }}>
        <div className="hero-grid">
          <div>
            <p style={{ fontSize: '11px', fontWeight: '700', color: C.accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>Institutional Trust for Homeowners</p>
            <h1 className="hero-title" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '52px', fontWeight: '700', lineHeight: '1.08', color: C.primary, marginBottom: '24px' }}>
              Secure your property<br />with absolute<br />certainty.
            </h1>
            <p style={{ fontSize: '16px', color: C.textMuted, lineHeight: '1.7', marginBottom: '36px', maxWidth: '420px' }}>
              Comprehensive, government-compliant background checks and identity verification designed specifically for discerning landlords and property managers.
            </p>
            <div className="hero-btns" style={{ display: 'flex', gap: '12px', marginBottom: '36px', flexWrap: 'wrap' }}>
              <button style={{ ...btnPrimary, padding: '14px 24px', fontSize: '15px' }} onClick={() => onNavigate('signup')}>Create Owner Account →</button>
              <button style={{ ...btnSecondary, padding: '14px 24px', fontSize: '15px' }}>View Sample Report</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex' }}>
                {['#778DA9', '#415A77', '#0D1B2A'].map((col, i) => (
                  <div key={i} style={{ width: '32px', height: '32px', borderRadius: '50%', background: col, border: '2px solid white', marginLeft: i > 0 ? '-8px' : '0' }} />
                ))}
              </div>
              <p style={{ fontSize: '13px', color: C.textMuted }}>Trusted by 16,000+ property managers</p>
            </div>
          </div>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: '12px', padding: '28px', boxShadow: '0 4px 24px rgba(13,27,42,0.07)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill={C.secondary}><path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82 1.89 3.2L12 21.04l3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"/></svg>
              <div>
                <p style={{ fontWeight: '600', fontSize: '15px', color: C.primary, margin: 0 }}>Verification Status</p>
                <p style={{ fontSize: '12px', color: C.accent, margin: 0 }}>Real-time tenant analysis</p>
              </div>
            </div>
            {[{ label: 'Identity Check', ok: true }, { label: 'Legal Records', ok: true }, { label: 'Financial History', ok: false }].map(item => (
              <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', background: C.bgLight, borderRadius: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', color: C.text }}>{item.label}</span>
                {item.ok ? <CheckCircle /> : <PendingIcon />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-pad" style={{ background: C.bgCard, padding: '80px 48px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '34px', fontWeight: '600', color: C.primary, marginBottom: '12px' }}>A structured approach to tenant security.</h2>
            <p style={{ color: C.textMuted, fontSize: '15px', maxWidth: '480px', margin: '0 auto', lineHeight: '1.6' }}>Our verification process minimizes cognitive load while ensuring rigorous, institutional-grade background checks.</p>
          </div>
          <div className="steps-grid">
            {steps.map(step => (
              <div key={step.num} style={{ padding: '28px', border: `1px solid ${C.border}`, borderRadius: '10px', background: C.bg }}>
                <span style={{ fontSize: '28px' }}>{step.emoji}</span>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: '600', fontSize: '17px', color: C.primary, margin: '14px 0 10px' }}>{step.num} {step.title}</h3>
                <p style={{ fontSize: '14px', color: C.textMuted, lineHeight: '1.65', margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-pad" style={{ padding: '80px 48px', background: C.bg }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '34px', fontWeight: '600', color: C.primary, marginBottom: '12px' }}>Simple & Transparent Pricing</h2>
            <p style={{ color: C.textMuted, fontSize: '15px' }}>Choose a plan that fits your verification needs. No hidden charges.</p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} index={i} flippedIndex={flippedIndex} onFlip={handleFlip} />
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '13px', color: C.accent, marginTop: '24px' }}>Additional properties, tenants, and verifications can be added based on usage and requirements</p>
        </div>
      </section>

      {/* Built for Trust */}
      <section id="about-us" className="section-pad" style={{ background: C.bgCard, padding: '80px 48px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '34px', fontWeight: '600', color: C.primary, marginBottom: '12px' }}>Built for Trust in Rentals</h2>
            <p style={{ color: C.textMuted, fontSize: '15px' }}>A comprehensive solution addressing the critical challenges of property management.</p>
          </div>
          <div className="trust-grid">
            <div style={{ background: C.bgLight, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '28px' }}>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: '600', fontSize: '18px', color: C.primary, marginBottom: '12px' }}>Overview</p>
              <p style={{ fontSize: '14px', color: C.textMuted, lineHeight: '1.7', margin: 0 }}>Know Your Tenant is a tenant background verification platform designed to bring institutional-grade security to independent landlords and property managers. We leverage advanced API integrations and algorithmic checks to verify identities, legal records, and financial stability with absolute certainty.</p>
            </div>
            <div style={{ background: '#fff8f0', border: '1px solid #fde8cc', borderRadius: '8px', padding: '28px' }}>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: '600', fontSize: '18px', color: C.primary, marginBottom: '12px' }}>The Problem We Solve</p>
              {problems.map(p => (
                <div key={p} style={{ display: 'flex', gap: '8px', marginBottom: '8px', alignItems: 'flex-start' }}>
                  <XIcon /><p style={{ fontSize: '13px', color: C.textMuted, margin: 0, lineHeight: '1.5' }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="comparison-table-wrap" style={{ border: `1px solid ${C.border}`, borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ padding: '16px 24px', background: C.bgLight, borderBottom: `1px solid ${C.border}` }}>
              <span style={{ fontWeight: '600', fontSize: '15px', color: C.primary }}>How KYT Is Different</span>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }}>
              <thead>
                <tr style={{ background: C.bgLight }}>
                  {['Aspect', 'Typical Platforms', 'KnowYourTenant'].map(h => (
                    <th key={h} style={{ padding: '12px 20px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.aspect} style={{ background: i % 2 === 0 ? C.bgCard : C.bgLight, borderTop: `1px solid ${C.border}` }}>
                    <td style={{ padding: '16px 20px', fontSize: '13px', fontWeight: '600', color: C.primary, whiteSpace: 'nowrap' }}>{row.aspect}</td>
                    <td style={{ padding: '16px 20px', fontSize: '13px', color: C.textMuted }}>{row.typical}</td>
                    <td style={{ padding: '16px 20px', fontSize: '13px', color: C.text }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <CheckCircle color="#2d6a4f" size={16} />{row.kyt}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-pad" style={{ background: C.bg, padding: '80px 48px' }}>
        <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '32px', fontWeight: '600', color: C.primary, marginBottom: '12px' }}>Get in Touch</h2>
          <p style={{ color: C.textMuted, fontSize: '15px', marginBottom: '36px' }}>Have questions or need assistance? We're here to help you secure your properties.</p>
          <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: '10px', padding: '32px', textAlign: 'left' }}>
            {[{ label: 'Full Name', placeholder: 'John Doe', key: 'name', type: 'text' }, { label: 'Email Address', placeholder: 'john@example.com', key: 'email', type: 'email' }, { label: 'Phone Number', placeholder: '+91 98765 43210', key: 'phone', type: 'tel' }].map(field => (
              <div key={field.key} style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: C.textMuted, marginBottom: '6px' }}>{field.label}</label>
                <input type={field.type} placeholder={field.placeholder} value={contactForm[field.key]} onChange={e => setContactForm({ ...contactForm, [field.key]: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', border: `1px solid ${C.border}`, borderRadius: '4px', fontSize: '14px', background: C.bgLight, color: C.text, outline: 'none', fontFamily: 'Inter, sans-serif' }} />
              </div>
            ))}
            <button style={{ ...btnPrimary, width: '100%', padding: '14px', fontSize: '15px', marginTop: '8px' }}>Send Message →</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: C.bgCard, borderTop: `1px solid ${C.border}`, padding: '24px 48px' }}>
        <div className="footer-inner" style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldIcon />
            <span style={{ fontFamily: 'Manrope, sans-serif', fontWeight: '700', fontSize: '14px', color: C.primary }}>KnowYourTenant</span>
          </div>
          <p style={{ fontSize: '12px', color: C.accent }}>© 2024 KnowYourTenant. Secure Verification Services.</p>
          <div className="footer-links" style={{ display: 'flex', gap: '20px' }}>
            {['Privacy Policy', 'Terms of Service', 'Security Disclosure', 'Support'].map(l => (
              <a key={l} href="#top" style={{ fontSize: '12px', color: C.accent, textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}