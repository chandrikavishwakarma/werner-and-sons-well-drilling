import { useState, useRef } from 'react';
import { Link, useNavigation } from '../context/NavigationContext';
import Strata from '../components/Strata';

export default function EstimatePage() {
  const { currentSearch } = useNavigation();
  const searchParams = new URLSearchParams(currentSearch || (typeof window !== 'undefined' ? window.location.search : ''));
  const urlService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    first: '',
    last: '',
    email: '',
    phone: '',
    service: urlService,
    day: '',
    time: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});
  const [handoffReady, setHandoffReady] = useState(false);
  const [mailto, setMailto] = useState('');
  const [copied, setCopied] = useState(false);
  const cardRef = useRef(null);
  const firstInvalidRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const getEmailBodyLines = () => [
    `Name: ${formData.first} ${formData.last}`,
    `Email: ${formData.email}`,
    `Phone: ${formData.phone}`,
    `Service: ${formData.service}`,
    `Preferred appointment day: ${formData.day || 'Flexible / No preference'}`,
    `Best time to contact: ${formData.time || 'Any time'}`,
    '',
    'Project Details & Notes:',
    formData.notes || 'None provided',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    ['first', 'last', 'email', 'phone', 'service'].forEach((name) => {
      if (!formData[name].trim()) nextErrors[name] = 'This field is required.';
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Enter a valid email address, such as name@example.com.';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (formData.phone && (phoneDigits.length < 10 || phoneDigits.length > 15)) {
      nextErrors.phone = 'Enter a phone number with 10 to 15 digits.';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      firstInvalidRef.current = Object.keys(nextErrors)[0];
      requestAnimationFrame(() => document.getElementById(firstInvalidRef.current)?.focus());
      return;
    }

    const lines = getEmailBodyLines();
    const requestMailto = `mailto:wernerandsons@yahoo.com?subject=${encodeURIComponent(
      'Estimate Request: ' + formData.service
    )}&body=${encodeURIComponent(lines.join('\n'))}`;

    setMailto(requestMailto);
    setHandoffReady(true);
    setCopied(false);

    if (cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleCopy = async () => {
    const lines = getEmailBodyLines();
    const textToCopy = `To: wernerandsons@yahoo.com\nSubject: Estimate Request: ${formData.service}\n\n${lines.join('\n')}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback if clipboard API is restricted
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleEdit = () => {
    setHandoffReady(false);
    requestAnimationFrame(() => {
      document.getElementById('first')?.focus();
    });
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Free Estimate</span>
          </nav>
          <span className="eyebrow">Free Estimate</span>
          <h1>Request your free estimate</h1>
          <p className="lead">
            We believe in making work easier for you. Fill out the form and we&rsquo;ll come to you &mdash; one of our team will get back to you as soon as possible.
          </p>
        </div>
        <Strata />
      </section>

      <section className="section">
        <div className="container form-wrap">
          <div ref={cardRef} className={`form-card reveal ${handoffReady ? 'sent' : ''}`}>
            {!handoffReady ? (
              <form id="estimate-form" onSubmit={handleSubmit} noValidate aria-label="Estimate request form">
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="first">
                      First name <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="first"
                      name="first"
                      autoComplete="given-name"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(errors.first)}
                      aria-describedby={errors.first ? 'first-error' : undefined}
                      value={formData.first}
                      onChange={handleChange}
                    />
                    {errors.first && <span className="field-error" id="first-error" role="alert">{errors.first}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="last">
                      Last name <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="last"
                      name="last"
                      autoComplete="family-name"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(errors.last)}
                      aria-describedby={errors.last ? 'last-error' : undefined}
                      value={formData.last}
                      onChange={handleChange}
                    />
                    {errors.last && <span className="field-error" id="last-error" role="alert">{errors.last}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="email">
                      Email address <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="field-error" id="email-error" role="alert">{errors.email}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="phone">
                      Phone number <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      inputMode="tel"
                      aria-required="true"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'phone-error' : 'phone-hint'}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <span id="phone-hint" className="form-field-hint" style={{ fontSize: '0.82rem', color: 'var(--brown-muted)' }}>
                      10 to 15 digits (e.g. 610-258-5615)
                    </span>
                    {errors.phone && <span className="field-error" id="phone-error" role="alert">{errors.phone}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="service">
                      Service for estimate <span className="req" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={errors.service ? 'service-error' : undefined}
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Choose a service&hellip;
                      </option>
                      <option value="Well Drilling">Well Drilling</option>
                      <option value="Well Deepening">Well Deepening</option>
                      <option value="Well Tanks">Well Tanks</option>
                      <option value="Water Treatment System">Water Treatment System</option>
                      <option value="Pump Sales, Service & Installation">Pump Sales, Service &amp; Installation</option>
                      <option value="Other / Not sure">Other / Not sure</option>
                    </select>
                    {errors.service && <span className="field-error" id="service-error" role="alert">{errors.service}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="day">Preferred appointment day</label>
                    <input
                      id="day"
                      name="day"
                      type="date"
                      aria-describedby="day-hint"
                      value={formData.day}
                      onChange={handleChange}
                    />
                    <span id="day-hint" className="form-field-hint" style={{ fontSize: '0.82rem', color: 'var(--brown-muted)' }}>
                      Optional visit date preference
                    </span>
                  </div>
                  <fieldset className="field full">
                    <legend>Best time to contact you</legend>
                    <div className="pills">
                      {['Morning', 'Afternoon', 'Evening'].map((t) => (
                        <label key={t}>
                          <input
                            type="radio"
                            name="time"
                            value={t}
                            checked={formData.time === t}
                            onChange={handleChange}
                          />
                          <span>{t}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <div className="field full">
                    <label htmlFor="notes">Comments / notes</label>
                    <textarea
                      id="notes"
                      name="notes"
                      placeholder="Tell us about your property, your well, or the problem you’re having…"
                      value={formData.notes}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div style={{ marginTop: '20px', padding: '14px 16px', background: 'rgba(73, 56, 43, 0.05)', borderRadius: 'var(--radius)', border: '1px solid var(--line)' }}>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--brown-muted)' }}>
                    <strong>What happens next:</strong> Clicking below prepares an email in your mail app pre-filled with your answers to <strong>wernerandsons@yahoo.com</strong>. You can review all details and click Send.
                  </p>
                </div>

                <button className="btn btn--red btn--block" type="submit" style={{ marginTop: '20px' }}>
                  Send My Estimate Request{' '}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
                <p className="form-note">
                  Prefer to talk? Call <a href="tel:+16102585615">(610) 258-5615</a> &mdash; phones are answered 24 hours a day.
                </p>
              </form>
            ) : (
              <div className="form-success form-handoff" role="status" style={{ display: 'block' }}>
                <div className="ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h16M13 5l7 7-7 7" />
                  </svg>
                </div>
                <h2>Your request is ready to email.</h2>
                <p className="lead" style={{ margin: '0 auto 16px' }}>
                  Your information has not been sent yet. Open your email application, review the message, and press Send. If it does not open, you can retry, copy the message text, or email us directly at{' '}
                  <a href="mailto:wernerandsons@yahoo.com">wernerandsons@yahoo.com</a>. Need help right away? Call{' '}
                  <a href="tel:+16102585615">(610) 258-5615</a>.
                </p>

                <div style={{ textAlign: 'left', background: '#FAF6EE', border: '1px solid var(--line)', borderRadius: 'var(--radius)', padding: '16px 20px', margin: '20px 0', fontSize: '0.92rem' }}>
                  <strong style={{ display: 'block', color: 'var(--forest-900)', marginBottom: '8px', fontSize: '0.98rem' }}>Summary of Your Estimate Request:</strong>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--brown)', lineHeight: 1.6 }}>
                    <li><strong>Customer:</strong> {formData.first} {formData.last}</li>
                    <li><strong>Contact:</strong> {formData.email} &middot; {formData.phone}</li>
                    <li><strong>Service:</strong> {formData.service}</li>
                    {formData.day && <li><strong>Preferred Day:</strong> {formData.day}</li>}
                    {formData.time && <li><strong>Preferred Time:</strong> {formData.time}</li>}
                    {formData.notes && <li><strong>Notes:</strong> {formData.notes}</li>}
                  </ul>
                </div>

                <div className="form-handoff-actions" style={{ gap: '10px' }}>
                  <a className="btn btn--red" href={mailto}>
                    Open email application
                  </a>
                  <button className="btn btn--outline" type="button" onClick={handleCopy}>
                    {copied ? '✓ Details Copied to Clipboard!' : 'Copy message details'}
                  </button>
                  <button className="btn btn--outline" type="button" onClick={handleEdit}>
                    Edit or retry request
                  </button>
                </div>
              </div>
            )}
          </div>

          <aside className="side-card side-card--dark reveal" style={{ padding: '36px' }}>
            <span className="eyebrow">How It Works</span>
            <h3 style={{ fontSize: '1.6rem' }}>Simple, no-pressure estimates</h3>
            <ol className="steps">
              <li>
                <div>
                  <strong>Send your request</strong>
                  <p>Tell us what you need and the best time to reach you.</p>
                </div>
              </li>
              <li>
                <div>
                  <strong>We reach out</strong>
                  <p>A member of our team contacts you as soon as possible.</p>
                </div>
              </li>
              <li>
                <div>
                  <strong>We come to you</strong>
                  <p>We visit your property and give you a free estimate.</p>
                </div>
              </li>
            </ol>
            <hr style={{ border: 0, borderTop: '1px solid rgba(255,255,255,.12)', margin: '30px 0' }} />
            <p style={{ margin: '0 0 6px' }}>Emergency? Call 24/7</p>
            <a className="phone-big" href="tel:+16102585615" style={{ marginBottom: '6px' }}>
              (610) 258-5615
            </a>
            <p style={{ margin: 0 }}>
              <a href="mailto:wernerandsons@yahoo.com" style={{ color: '#d5e3e0' }}>
                wernerandsons@yahoo.com
              </a>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
