import { Link } from '../context/NavigationContext';
import Strata from '../components/Strata';
import Sidebar from '../components/Sidebar';
import CtaBand from '../components/CtaBand';

export default function WaterTreatment() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Water Treatment</span>
          </nav>
          <span className="eyebrow">Water Treatment Systems</span>
          <h1>Enjoy fresh, great&#8209;tasting well water again</h1>
          <p className="lead">
            Our contractors in Easton, Pennsylvania service, repair and install water purification systems for homes and businesses.
          </p>
        </div>
        <Strata />
      </section>

      <section className="section">
        <div className="container content-grid">
          <div className="prose">
            <h2>Water treatment systems</h2>
            <p>
              Does your water taste bad? We work on all internal water purification systems. Taste the difference when we install a new system in your home or business &mdash; it doesn&rsquo;t just make water taste better, it makes it healthier to drink.
            </p>
            <div className="feature-grid">
              <div className="feature">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.7l5.7 5.7a8 8 0 1 1-11.3 0z" />
                  </svg>
                </div>
                <h3>Water Softeners</h3>
                <p>Reduce hard-water scale on fixtures, appliances and water heaters.</p>
              </div>
              <div className="feature">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 3H2l8 9.5V19l4 2v-8.5z" />
                  </svg>
                </div>
                <h3>Iron Removal Units</h3>
                <p>Say goodbye to orange stains and that metallic taste.</p>
              </div>
              <div className="feature">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 3h6M10 3v6L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9V3" />
                    <path d="M7 15h10" />
                  </svg>
                </div>
                <h3>Acid Neutralizers</h3>
                <p>Balance acidic water that can corrode pipes and plumbing.</p>
              </div>
              <div className="feature">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                  </svg>
                </div>
                <h3>UV Light Purification</h3>
                <p>Chemical-free disinfection for safer drinking water.</p>
              </div>
            </div>
            <div className="callout">
              <p>
                We install <strong>ATS&reg; water purification systems</strong> &mdash; and our professional team provides fast, friendly and affordable service on all internal systems.
              </p>
            </div>
            <h2>Not sure what your water needs?</h2>
            <p>
              Tell us what you&rsquo;re noticing &mdash; bad taste or odor, staining, scale build-up, or concerns about safety &mdash; and we&rsquo;ll recommend the right system for your well.
            </p>
            <p>
              <Link className="btn btn--red" href="/estimate?service=Water%20Treatment%20System">
                Request a water treatment estimate{' '}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </p>
          </div>
          <Sidebar />
        </div>
      </section>

      <CtaBand
        title="Taste the difference."
        description="Request an estimate from our established and well-respected water drilling company."
      />
    </>
  );
}
