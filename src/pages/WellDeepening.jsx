import { Link } from '../context/NavigationContext';
import Strata from '../components/Strata';
import Sidebar from '../components/Sidebar';
import CtaBand from '../components/CtaBand';

export default function WellDeepening() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Well Deepening</span>
          </nav>
          <span className="eyebrow">Well Deepening &amp; Tanks</span>
          <h1>Well deepening &amp; well tanks</h1>
          <p className="lead">
            Increase your well&rsquo;s efficiency with water well deepening services from our team in Easton, Pennsylvania.
          </p>
        </div>
        <Strata />
      </section>

      <section className="section">
        <div className="container content-grid">
          <div className="prose">
            <h2>Water well deepening</h2>
            <p>
              Dig deep into quality well services when you call on Werner &amp; Sons Well Drilling LLC. We offer well deepening services that safely and efficiently deepen your well while protecting its longevity &mdash; and improving how it functions.
            </p>
            <p>
              When your well is older, you may need us to remove sediment and other materials to reach the water again. Let us dig deeper to get you back to a reliable water source.
            </p>
            <div className="feature-grid">
              <div className="feature">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
                    <path d="M12 9v4M12 17h.01" />
                  </svg>
                </div>
                <h3>Running low or dry?</h3>
                <p>Older wells can lose output as sediment builds up or water tables shift.</p>
              </div>
              <div className="feature">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3>Protects longevity</h3>
                <p>Deepening safely restores your existing well &mdash; no need to start over.</p>
              </div>
            </div>
            <div className="inline-photo">
              <img src="/assets/g11.jpg" alt="Drilling rig deepening a residential well" width="800" height="450" loading="lazy" decoding="async" />
            </div>
            <h2>Well tanks</h2>
            <p>
              Over time, water tanks wear out. When they&rsquo;re becoming rusty or ineffective, it&rsquo;s time to change them. We install all types of holding tanks and pressure tanks for your home or business, including:
            </p>
            <div className="brand-row">
              <span className="brand-chip">Champion&reg;</span>
              <span className="brand-chip">WELL-X-TROL&reg;</span>
              <span className="brand-chip">J-Class Water Pumps</span>
            </div>
            <div className="callout">
              <p>
                <strong>Signs it&rsquo;s time for a new tank:</strong> visible rust, leaks, water pressure that swings up and down, or a pump that clicks on and off frequently.
              </p>
            </div>
          </div>
          <Sidebar />
        </div>
      </section>

      <CtaBand
        title="Get your well flowing again."
        description="Request an estimate for prompt, professional well deepening and tank service."
      />
    </>
  );
}
