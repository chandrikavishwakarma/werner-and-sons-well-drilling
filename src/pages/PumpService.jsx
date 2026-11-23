import { Link } from '../context/NavigationContext';
import Strata from '../components/Strata';
import Sidebar from '../components/Sidebar';
import CtaBand from '../components/CtaBand';

export default function PumpService() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Pumps</span>
          </nav>
          <span className="eyebrow">Pump Sales, Service &amp; Installation</span>
          <h1>No water? We&rsquo;re a phone call away.</h1>
          <p className="lead">
            Sales, service and installation of submersible well pumps &mdash; with phones answered 24 hours a day for emergencies.
          </p>
        </div>
        <Strata />
      </section>

      <section className="section">
        <div className="container content-grid">
          <div className="prose">
            <h2>Well pump sales, service &amp; installation</h2>
            <p>
              Our company installs <strong>J-class submersible pumps</strong>. Whether you need a new pump for a freshly drilled well, a replacement for a worn-out unit, or a repair, our team gets your water running again quickly.
            </p>
            <div className="feature-grid">
              <div className="feature">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z" />
                  </svg>
                </div>
                <h3>Pump Service &amp; Repair</h3>
                <p>Prompt diagnosis and repair to restore your water supply.</p>
              </div>
              <div className="feature">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 14l4-4" />
                    <path d="M3.3 19a10 10 0 1 1 17.4 0" />
                  </svg>
                </div>
                <h3>New Pump Installation</h3>
                <p>Correctly sized J-class submersible pumps for your well.</p>
              </div>
              <div className="feature">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3>Pressure &amp; Holding Tanks</h3>
                <p>Champion&reg; and WELL-X-TROL&reg; tank installation.</p>
              </div>
              <div className="feature">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3>24-Hour Emergencies</h3>
                <p>Pump stopped working? Call any time, day or night.</p>
              </div>
            </div>
            <div className="inline-photo">
              <img
                src="/assets/g1.jpg"
                alt="Werner &amp; Sons service truck at a customer&rsquo;s home"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
                style={{ objectPosition: 'center 60%' }}
              />
            </div>
            <h2>Signs your pump needs attention</h2>
            <ul className="checks">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>
                  <strong>No water or sputtering faucets</strong> &mdash; air in the lines or no flow at all.
                </span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>
                  <strong>Low or fluctuating pressure</strong> throughout the house.
                </span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>
                  <strong>A pump that runs constantly</strong> or cycles on and off rapidly.
                </span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>
                  <strong>An unexplained spike</strong> in your electric bill.
                </span>
              </li>
            </ul>
            <h2>Frequently asked questions about well pumps &amp; service</h2>
            <div className="faq-list">
              <details className="faq" open>
                <summary>What are the most common signs of a failing well pump?</summary>
                <p>
                  Common warning signs include complete loss of water, faucets that sputter air, water pressure that fluctuates dramatically during showers, clicking noises from the pressure switch as the pump cycles on and off, or a pump motor that runs continuously without building sufficient pressure.
                </p>
              </details>
              <details className="faq">
                <summary>Why is my well pump running constantly or cycling rapidly?</summary>
                <p>
                  A pump that runs non-stop or turns on and off rapidly is commonly caused by a waterlogged or leaking pressure tank, a malfunctioning pressure switch, a leak in the underground supply line, or a worn pump impeller. Rapid cycling strains the motor and should be addressed promptly to avoid pump failure.
                </p>
              </details>
              <details className="faq">
                <summary>When should I call for emergency pump repair?</summary>
                <p>
                  If you have completely lost water, notice an electrical burning smell near your pump control box, or hear your pump running non-stop without shutting off, call immediately. Our phones are answered 24 hours a day for emergency service, including nights, weekends, and holidays.
                </p>
              </details>
              <details className="faq">
                <summary>What details should I have ready when calling for pump service?</summary>
                <p>
                  Having a few basic details ready helps our technicians diagnose the issue quickly: whether you have complete water loss or low pressure, whether you hear clicking at the tank, where your well head and tank are located, and whether the pump&rsquo;s electrical breaker has tripped.
                </p>
              </details>
            </div>
          </div>
          <Sidebar />
        </div>
      </section>

      <CtaBand
        title="Pump stopped working?"
        description="Call us any time — our phones are answered 24 hours a day."
      />
    </>
  );
}
