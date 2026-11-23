import { Link } from '../context/NavigationContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand-col">
          <Link className="footer-logo" href="/">
            <img src="/assets/logo.png" alt="Werner &amp; Sons Well Drilling" width="273" height="137" />
          </Link>
          <p className="script-tag">Drill your well the old-fashioned way</p>
          <p className="footer-desc">
            Family-owned water well contractor drilling wells the clean, reliable way for over 50 years.
          </p>
          <div className="social">
            <a
              href="https://www.facebook.com/pages/Werner-and-Sons-Well-Drilling/155665974504295"
              target="_blank"
              rel="noopener"
              aria-label="Werner &amp; Sons on Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 8V6.3c0-.8.2-1.3 1.4-1.3H17V2h-2.6C11.6 2 10.6 3.6 10.6 6.2V8H8v3h2.6v11H14V11h2.7l.4-3z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-nav-col">
          <h4>Services</h4>
          <ul>
            <li><Link href="/well-drilling">Well Drilling</Link></li>
            <li><Link href="/well-deepening">Well Deepening &amp; Tanks</Link></li>
            <li><Link href="/water-treatment">Water Treatment Systems</Link></li>
            <li><Link href="/pump-service">Pump Sales, Service &amp; Installation</Link></li>
          </ul>
        </div>

        <div className="footer-nav-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/#about">About Us</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/resources">Homeowner Resources</Link></li>
            <li><Link href="/estimate">Free Estimate</Link></li>
            <li><Link href="/#area">Service Area</Link></li>
          </ul>
        </div>

        <div className="footer-contact-col">
          <h4>Get in Touch</h4>
          <ul>
            <li className="contact-line contact-line--phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
              </svg>
              <a href="tel:+16102585615" className="phone-link">(610) 258-5615</a>
            </li>
            <li className="contact-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              <a href="mailto:wernerandsons@yahoo.com">wernerandsons@yahoo.com</a>
            </li>
            <li className="contact-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Easton, Pennsylvania</span>
            </li>
            <li className="contact-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>Phones answered 24 hours a day</span>
            </li>
            <li className="contact-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <circle cx="12" cy="12" r="2.5" />
                <path d="M6 12h.01M18 12h.01" />
              </svg>
              <span>We accept cash &amp; personal checks</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-divider-row">
        <div className="container">
          <div className="brass-divider">
            <span className="line"></span>
            <span className="symbol">&#9670;</span>
            <span className="line"></span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>&copy; {currentYear} Werner &amp; Sons Well Drilling LLC. All rights reserved.</span>
          <span>Serving Northampton, Lehigh, Monroe &amp; Carbon Counties and the Poconos</span>
        </div>
      </div>
    </footer>
  );
}
