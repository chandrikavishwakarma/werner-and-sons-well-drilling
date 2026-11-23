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
  const cardRef = useRef(null);
  const firstInvalidRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

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

    const lines = [
      `Name: ${formData.first} ${formData.last}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Service: ${formData.service}`,
      `Preferred appointment day: ${formData.day || '-'}`,
      `Best time to contact: ${formData.time || '-'}`,
      '',
      'Notes:',
      formData.notes || '-',
    ];

    const requestMailto = `mailto:wernerandsons@yahoo.com?subject=${encodeURIComponent(
      'Estimate Request: ' + formData.service
    )}&body=${encodeURIComponent(lines.join('\n'))}`;

    setMailto(requestMailto);
    setHandoffReady(true);

    if (cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
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
              <form id="estimate-form" onSubmit={handleSubmit} noValidate>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="first">
                      First name <span className="req">*</span>
                    </label>
                    <input
                      id="first"
                      name="first"
                      autoComplete="given-name"
                      required
                      aria-invalid={Boolean(errors.first)}
                      aria-describedby={errors.first ? 'first-error' : undefined}
                      value={formData.first}
                      onChange={handleChange}
                    />
                    {errors.first && <span className="field-error" id="first-error">{errors.first}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="last">
                      Last name <span className="req">*</span>
                    </label>
                    <input
                      id="last"
                      name="last"
                      autoComplete="family-name"
                      required
                      aria-invalid={Boolean(errors.last)}
                      aria-describedby={errors.last ? 'last-error' : undefined}
                      value={formData.last}
                      onChange={handleChange}
                    />
                    {errors.last && <span className="field-error" id="last-error">{errors.last}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="email">
                      Email <span className="req">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="phone">
                      Phone number <span className="req">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      inputMode="tel"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <span className="field-error" id="phone-error">{errors.phone}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="service">
                      Service for estimate <span className="req">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
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
                    {errors.service && <span className="field-error" id="service-error">{errors.service}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="day">Preferred appointment day</label>
                    <input
                      id="day"
                      name="day"
                      type="date"
                      value={formData.day}
                      onChange={handleChange}
                    />
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
                <button className="btn btn--red btn--block" type="submit" style={{ marginTop: '24px' }}>
                  Send My Estimate Request{' '}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
                <p className="form-note">
                  Prefer to talk? Call <a href="tel:+16102585615">(610) 258-5615</a> &mdash; phones are answered 24 hours a day.
                </p>
              </form>
            ) : (
              <div className="form-success form-handoff" role="status" style={{ display: 'block' }}>
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h16M13 5l7 7-7 7" />
                  </svg>
                </div>
                <h2>Your request is ready to email.</h2>
                <p className="lead" style={{ margin: '0 auto 20px' }}>
                  Your information has not been sent yet. Open your email application, review the message, and press Send. If it does not open, you can retry or email us directly at{' '}
                  <a href="mailto:wernerandsons@yahoo.com">wernerandsons@yahoo.com</a>. Need help right away? Call{' '}
                  <a href="tel:+16102585615">(610) 258-5615</a>.
                </p>
                <div className="form-handoff-actions">
                  <a className="btn btn--red" href={mailto}>Open email application</a>
                  <button className="btn btn--outline" type="button" onClick={() => setHandoffReady(false)}>Edit or retry request</button>
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
