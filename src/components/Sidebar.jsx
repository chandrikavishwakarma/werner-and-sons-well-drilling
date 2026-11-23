import { Link, useNavigation } from '../context/NavigationContext';

export default function Sidebar() {
  const { currentPath } = useNavigation();

  return (
    <aside className="sidebar reveal">
      <div className="side-card side-card--dark">
        <h3>Need help today?</h3>
        <p>Phones are answered 24 hours a day for emergency service.</p>
        <a className="phone-big" href="tel:+16102585615">
          (610) 258-5615
        </a>
        <Link className="btn btn--gold btn--block" href="/estimate">
          Request a Free Estimate
        </Link>
      </div>
      <div className="side-card">
        <h3>Our Services</h3>
        <ul className="side-links">
          <li>
            <Link href="/well-drilling" aria-current={currentPath === '/well-drilling' ? 'page' : undefined}>
              Well Drilling{' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/well-deepening" aria-current={currentPath === '/well-deepening' ? 'page' : undefined}>
              Well Deepening &amp; Tanks{' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/water-treatment" aria-current={currentPath === '/water-treatment' ? 'page' : undefined}>
              Water Treatment Systems{' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/pump-service" aria-current={currentPath === '/pump-service' ? 'page' : undefined}>
              Pump Sales, Service &amp; Installation{' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
