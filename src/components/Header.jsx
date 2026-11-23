import { useState, useEffect } from 'react';
import { Link, useNavigation } from '../context/NavigationContext';

export default function Header() {
  const { currentPath } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add('nav-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('nav-open');
      document.body.style.overflow = '';
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setNavOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('nav-open');
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [navOpen]);

  const closeMenu = () => setNavOpen(false);
  const toggleMenu = () => setNavOpen((prev) => !prev);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link aria-label="Werner &amp; Sons Well Drilling home" className="logo" href="/" onClick={closeMenu}>
            <img src="/assets/logo.png" alt="Werner &amp; Sons Well Drilling" width="273" height="137" fetchPriority="high" />
          </Link>
          <div className="nav-wrap" id="site-nav">
            <div className="mobile-drawer-brand">
              <span className="mobile-drawer-title">Werner &amp; Sons</span>
              <span className="drawer-est">Easton, PA &middot; 50+ Years</span>
            </div>

            <nav className="nav" aria-label="Main">
              <Link href="/" aria-current={currentPath === '/' ? 'page' : undefined} onClick={closeMenu}>Home</Link>
              <Link href="/well-drilling" aria-current={currentPath === '/well-drilling' ? 'page' : undefined} onClick={closeMenu}>Well Drilling</Link>
              <Link href="/well-deepening" aria-current={currentPath === '/well-deepening' ? 'page' : undefined} onClick={closeMenu}>Well Deepening</Link>
              <Link href="/water-treatment" aria-current={currentPath === '/water-treatment' ? 'page' : undefined} onClick={closeMenu}>Water Treatment</Link>
              <Link href="/pump-service" aria-current={currentPath === '/pump-service' ? 'page' : undefined} onClick={closeMenu}>Pumps</Link>
              <Link href="/gallery" aria-current={currentPath === '/gallery' ? 'page' : undefined} onClick={closeMenu}>Gallery</Link>
            </nav>

            <div className="nav-cta">
              <a className="btn btn--outline" href="tel:+16102585615">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                </svg>{' '}
                (610) 258-5615
              </a>
              <Link className="btn btn--red" href="/estimate" aria-current={currentPath === '/estimate' ? 'page' : undefined} onClick={closeMenu}>
                Free Estimate
              </Link>
            </div>

            <div className="mobile-drawer-footer">
              <div className="drawer-contact-badge">
                <span className="drawer-badge-pulse" aria-hidden="true"></span>
                <span>24-Hour Emergency Service</span>
              </div>
              <p className="drawer-location">Easton, Pennsylvania &middot; Cable Tool Drilling</p>
            </div>
          </div>

          <button
            className="menu-toggle"
            aria-label={navOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={navOpen}
            aria-controls="site-nav"
            onClick={toggleMenu}
          >
            <span></span>
          </button>
        </div>
      </header>
      <div className="scrim" onClick={closeMenu} aria-hidden={!navOpen}></div>
    </>
  );
}
