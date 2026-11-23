import { Link } from '../context/NavigationContext';
import Strata from '../components/Strata';
import Sidebar from '../components/Sidebar';
import CtaBand from '../components/CtaBand';

export default function WellDrilling() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Well Drilling</span>
          </nav>
          <span className="eyebrow">Well Drilling</span>
          <h1>Water well drilling in Easton, Pennsylvania</h1>
          <p className="lead">
            Don&rsquo;t get flooded with high water bills. Our team provides affordable water well drilling for all types of wells &mdash; using the clean, reliable cable tool method.
          </p>
        </div>
        <Strata />
      </section>

      <section className="section">
        <div className="container content-grid">
          <div className="prose">
            <h2>Well water drilling services</h2>
            <p>
              Werner &amp; Sons Well Drilling LLC offers well drilling services for all types of water wells. Our team specializes in an effective, time-tested technique: <strong>cable tool drilling</strong>.
            </p>
            <div className="feature-grid">
              <div className="feature">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" />
                    <path d="M2 21c0-3 1.9-5.4 5.1-6" />
                  </svg>
                </div>
                <h3>Nothing artificial added</h3>
                <p>No fluids, foams or oils &mdash; only water in your well.</p>
              </div>
              <div className="feature">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3>Protects formations</h3>
                <p>No high-pressure air to collapse or clog porous rock.</p>
              </div>
              <div className="feature">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M8 5h4M8 9h4M8 13h4M8 17h4" />
                    <path d="M16 6l3 3-3 3" />
                  </svg>
                </div>
                <h3>Priced by the foot</h3>
                <p>You&rsquo;re typically charged per foot drilled, not per hour.</p>
              </div>
              <div className="feature">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 14l4-4" />
                    <path d="M3.3 19a10 10 0 1 1 17.4 0" />
                  </svg>
                </div>
                <h3>Built to last</h3>
                <p>A well that serves you for decades with less maintenance.</p>
              </div>
            </div>
            <div className="inline-photo">
              <img src="/assets/g10.jpg" alt="Werner &amp; Sons cable tool rigs drilling on residential properties" width="800" height="450" loading="lazy" decoding="async" />
            </div>
            <h2>Consider the advantages of cable tool drilling</h2>
            <div className="faq-list">
              <details className="faq" open>
                <summary>Why go with the cable tool method?</summary>
                <p>
                  In most cases you&rsquo;re charged by the foot of drilled hole, not by the hour. Cable tool drilling is a slower, gentler method that does little to upset the formations surrounding your well. Since no high-pressure air or drilling fluid is used, there&rsquo;s less chance of porous formations being traumatized, collapsed, clogged or otherwise impaired by debris or excess pressure and motion.
                </p>
              </details>
              <details className="faq">
                <summary>Isn&rsquo;t air drilling faster?</summary>
                <p>
                  Cable tool drilling is a slower method &mdash; but ask yourself what kind of quality you&rsquo;ll end up with over the long haul. Your water well is a long-term investment. Its depth and quality determine the frequency and cost of pump and well maintenance in the years ahead. Consider how the hours spent drilling your well now will affect you in the decades to come.
                </p>
              </details>
              <details className="faq">
                <summary>Does a deeper well cost more?</summary>
                <p>
                  Yes. An unnecessarily deep well costs you more in footage drilled, and also in well casing, electric cable, pump pipe, and possibly a more powerful pump to push water up the hole &mdash; not to mention more wear and tear on the pump. Cable tool drilling often lets a well fill faster and easier with less depth.
                </p>
              </details>
              <details className="faq">
                <summary>Is anything added to my well during drilling?</summary>
                <p>
                  Nothing artificial. Only water will be in your well during the drilling process &mdash; no drilling fluids, foams, leaking oils or other matter unrelated to your water, soil and rock formations.
                </p>
              </details>
            </div>
            <div className="callout">
              <p>
                <strong>Ask around.</strong> Talk to people who have had wells drilled by different methods and see what they have to say. We think you&rsquo;ll choose to have your well drilled using the clean, reliable cable tool method.
              </p>
            </div>
          </div>
          <Sidebar />
        </div>
      </section>

      <CtaBand
        title="Tired of paying high water bills?"
        description="Request an estimate for well drilling services — it’s free, and we’ll come to you."
      />
    </>
  );
}
