import { useState, useEffect, useRef } from 'react';
import { Link, useNavigation } from '../context/NavigationContext';

export default function Header() {
  const { currentPath } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const toggleRef = useRef(null);
  const drawerRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let focusTimer;
    const backgroundElements = [
      document.getElementById('main'),
      document.querySelector('footer'),
      document.querySelector('.topbar'),
      document.querySelector('.mobile-bar'),
    ].filter(Boolean);

    if (navOpen) {
      previousFocusRef.current = document.activeElement;
      document.body.classList.add('nav-open');
      document.body.style.overflow = 'hidden';

      backgroundElements.forEach((el) => {
        el.setAttribute('inert', '');
        el.setAttribute('aria-hidden', 'true');
      });

      // Move focus into the first navigation link inside the drawer
      const focusFirst = () => {
        if (drawerRef.current) {
          const firstFocusable = drawerRef.current.querySelector('.nav a, a[href], button:not([disabled])');
          if (firstFocusable) {
            firstFocusable.focus();
          }
        }
      };
      focusFirst();
      focusTimer = setTimeout(focusFirst, 50);
    } else {
      document.body.classList.remove('nav-open');
      document.body.style.overflow = '';

      backgroundElements.forEach((el) => {
        el.removeAttribute('inert');
        el.removeAttribute('aria-hidden');
      });
    }

    const onKeyDown = (e) => {
      if (!navOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        setNavOpen(false);
        if (toggleRef.current) {
          toggleRef.current.focus();
        }
        return;
      }

      if (e.key === 'Tab') {
        if (!drawerRef.current) return;
        const focusable = [
          ...drawerRef.current.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
        ].filter((el) => {
          return el.offsetParent !== null || getComputedStyle(el).display !== 'none';
        });

        if (toggleRef.current && getComputedStyle(toggleRef.current).display !== 'none') {
          focusable.push(toggleRef.current);
        }

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      if (focusTimer) clearTimeout(focusTimer);
      document.body.classList.remove('nav-open');
      document.body.style.overflow = '';
      backgroundElements.forEach((el) => {
        el.removeAttribute('inert');
        el.removeAttribute('aria-hidden');
      });
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [navOpen]);

  const closeMenu = (restoreFocus = false) => {
    setNavOpen(false);
    if (restoreFocus && toggleRef.current) {
      toggleRef.current.focus();
    }
  };

  const toggleMenu = () => {
    setNavOpen((prev) => {
      const next = !prev;
      if (!next && toggleRef.current) {
        requestAnimationFrame(() => toggleRef.current?.focus());
      }
      return next;
    });
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link aria-label="Werner &amp; Sons Well Drilling home" className="logo" href="/" onClick={() => closeMenu(false)}>
            <img src="/assets/logo.png" alt="Werner &amp; Sons Well Drilling" width="273" height="137" fetchPriority="high" />
          </Link>
          <div
            ref={drawerRef}
            className="nav-wrap"
            id="site-nav"
            role={navOpen ? 'dialog' : undefined}
            aria-modal={navOpen ? 'true' : undefined}
            aria-label={navOpen ? 'Site navigation' : undefined}
          >
            <div className="mobile-drawer-brand">
              <span className="mobile-drawer-title">Werner &amp; Sons</span>
              <span className="drawer-est">Easton, PA &middot; 50+ Years</span>
            </div>

            <nav className="nav" aria-label="Main">
              <Link href="/" aria-current={currentPath === '/' ? 'page' : undefined} onClick={() => closeMenu(false)}>Home</Link>
              <Link href="/well-drilling" aria-current={currentPath === '/well-drilling' ? 'page' : undefined} onClick={() => closeMenu(false)}>Well Drilling</Link>
              <Link href="/well-deepening" aria-current={currentPath === '/well-deepening' ? 'page' : undefined} onClick={() => closeMenu(false)}>Well Deepening</Link>
              <Link href="/water-treatment" aria-current={currentPath === '/water-treatment' ? 'page' : undefined} onClick={() => closeMenu(false)}>Water Treatment</Link>
              <Link href="/pump-service" aria-current={currentPath === '/pump-service' ? 'page' : undefined} onClick={() => closeMenu(false)}>Pumps</Link>
              <Link href="/gallery" aria-current={currentPath === '/gallery' ? 'page' : undefined} onClick={() => closeMenu(false)}>Gallery</Link>
              <Link href="/resources" aria-current={currentPath === '/resources' ? 'page' : undefined} onClick={() => closeMenu(false)}>Resources</Link>
            </nav>

            <div className="nav-cta">
              <a className="btn btn--outline" href="tel:+16102585615">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                </svg>{' '}
                (610) 258-5615
              </a>
              <Link className="btn btn--red" href="/estimate" aria-current={currentPath === '/estimate' ? 'page' : undefined} onClick={() => closeMenu(false)}>
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
            ref={toggleRef}
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
      <div className="scrim" onClick={() => closeMenu(true)} aria-hidden={!navOpen}></div>
      <div className="sr-only" role="status" aria-live="polite">
        {navOpen ? 'Navigation menu opened' : ''}
      </div>
    </>
  );
}
