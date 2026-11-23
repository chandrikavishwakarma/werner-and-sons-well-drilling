import { Link } from '../context/NavigationContext';
import { useLightbox } from '../context/LightboxContext';
import Strata from '../components/Strata';
import CtaBand from '../components/CtaBand';

export default function Home() {
  const { openLightbox } = useLightbox();

  const galleryImages = [
    { src: '/assets/g3.jpg', alt: 'Werner & Sons drilling equipment and job sites', class: 'wide' },
    { src: '/assets/g9.jpg', alt: 'Werner & Sons drilling equipment and job sites', class: 'tall' },
    { src: '/assets/g4.jpg', alt: 'Werner & Sons drilling equipment and job sites', class: '' },
    { src: '/assets/g10.jpg', alt: 'Werner & Sons drilling equipment and job sites', class: '' },
    { src: '/assets/g6.jpg', alt: 'Werner & Sons drilling equipment and job sites', class: 'wide' },
    { src: '/assets/drilling.jpg', alt: 'Werner & Sons drilling equipment and job sites', class: '' },
    { src: '/assets/g8.jpg', alt: 'Werner & Sons drilling equipment and job sites', class: '' },
    { src: '/assets/g5.jpg', alt: 'Werner & Sons drilling equipment and job sites', class: '' },
    { src: '/assets/g2.jpg', alt: 'Werner & Sons drilling equipment and job sites', class: '' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow">Water Well Contractor &middot; Easton, PA</span>
            <h1>
              Drill your well the <em>old&#8209;fashioned</em> way.
            </h1>
            <p className="lead">
              For more than 50 years, our family has drilled clean, reliable water wells across Eastern Pennsylvania using the gentle cable tool method &mdash; no drilling fluids, no mess, just water.
            </p>
            <div className="hero-actions">
              <Link className="btn btn--gold" href="/estimate">
                Get a Free Estimate{' '}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <a className="btn btn--ghost" href="tel:+16102585615">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                </svg>{' '}
                (610) 258-5615
              </a>
            </div>
            <ul className="hero-trust">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>{' '}
                Family owned &amp; operated
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>{' '}
                24-hour emergency service
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z" />
                  <circle cx="7" cy="7" r="1.5" />
                </svg>{' '}
                Free estimates
              </li>
            </ul>
          </div>

          <div className="hero-media">
            <div className="hero-photo">
              <img src="/assets/g3.jpg" alt="Werner &amp; Sons drilling truck with cable tool rig" width="640" height="480" fetchPriority="high" />
            </div>
            <div className="hero-photo-sm">
              <img src="/assets/drilling.jpg" alt="Drilling rig raised on a residential job" width="276" height="372" loading="lazy" decoding="async" />
            </div>
            <div className="hero-badge" aria-label="50+ years drilling, family owned">
              <svg viewBox="0 0 200 200" aria-hidden="true">
                <defs>
                  <path id="ring" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
                </defs>
                <circle cx="100" cy="100" r="96" fill="#B08A50" />
                <circle cx="100" cy="100" r="89" fill="none" stroke="#49382B" strokeWidth="2" />
                <circle cx="100" cy="100" r="56" fill="none" stroke="#49382B" strokeWidth="2" />
                <text fontFamily="'Source Sans 3', sans-serif" fontSize="15" fontWeight="600" letterSpacing="3" fill="#49382B">
                  <textPath href="#ring" textLength="455">
                    &#9733; FAMILY OWNED &#9733; EASTON, PA &#9733; FREE ESTIMATES
                  </textPath>
                </text>
              </svg>
              <div className="hero-badge-center">
                <strong>50+</strong>
                <span>Years</span>
              </div>
            </div>
          </div>
        </div>
        <Strata />
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid reveal">
            <div className="stat">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
                </svg>
              </div>
              <div>
                <strong>50+ Years</strong>
                <span>Family owned &amp; operated</span>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <strong>24/7 Service</strong>
                <span>Phones answered around the clock</span>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z" />
                  <circle cx="7" cy="7" r="1.5" />
                </svg>
              </div>
              <div>
                <strong>Free Estimates</strong>
                <span>We come to you</span>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="M9 22V12h6v10" />
                </svg>
              </div>
              <div>
                <strong>All Properties</strong>
                <span>Residential, commercial &amp; industrial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">What We Do</span>
            <h2>Complete water well services, from the ground up</h2>
            <p className="lead">From drilling a brand-new well to keeping your water flowing and tasting great &mdash; one trusted local team handles it all.</p>
          </div>
          <div className="services-grid">
            <Link className="service-card reveal" href="/well-drilling">
              <div className="media">
                <img src="/assets/g7.jpg" alt="Cable tool drilling rig set up on a job site" width="480" height="320" loading="lazy" decoding="async" />
              </div>
              <div className="body">
                <span className="num">01</span>
                <h3>Water Well Drilling</h3>
                <p>Comprehensive well drilling for homes and businesses using the gentle, proven cable tool method.</p>
                <span className="more">
                  Learn more{' '}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link className="service-card reveal" href="/well-deepening">
              <div className="media">
                <img src="/assets/g11.jpg" alt="Drilling rig deepening a well beside a home" width="480" height="320" loading="lazy" decoding="async" />
              </div>
              <div className="body">
                <span className="num">02</span>
                <h3>Well Deepening</h3>
                <p>When an older well runs low, we clear sediment and dig deeper to reach your water source again.</p>
                <span className="more">
                  Learn more{' '}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link className="service-card reveal" href="/water-treatment">
              <div className="media media--graphic">
                <div className="graphic-droplet-aura">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.7l5.7 5.7a8 8 0 1 1-11.3 0z" />
                  </svg>
                </div>
                <span>Softeners &middot; Iron &middot; UV</span>
              </div>
              <div className="body">
                <span className="num">03</span>
                <h3>Water Purification</h3>
                <p>Softeners, iron removal, acid neutralizers and UV systems for healthier, better-tasting water.</p>
                <span className="more">
                  Learn more{' '}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link className="service-card reveal" href="/pump-service">
              <div className="media">
                <img src="/assets/g1.jpg" alt="Werner &amp; Sons service truck" width="480" height="320" loading="lazy" decoding="async" />
              </div>
              <div className="body">
                <span className="num">04</span>
                <h3>Pump Installation</h3>
                <p>Sales, service and installation &mdash; call us when your pump stops working, day or night.</p>
                <span className="more">
                  Learn more{' '}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Decorative Antique Brass Divider */}
      <div className="container">
        <div className="brass-divider">
          <span className="line"></span>
          <span className="symbol">&#9670;</span>
          <span className="line"></span>
        </div>
      </div>

      {/* Cable Tool Drilling Section */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Why Cable Tool Drilling</span>
            <h2>Slower by design. Better for the long haul.</h2>
            <p className="lead" style={{ color: '#DCE5DF' }}>
              Your well is a long-term investment. Cable tool drilling is gentler on the surrounding formations, which often means a faster-filling well with less depth &mdash; and lower costs for years to come.
            </p>
          </div>
          <div className="compare">
            <div className="compare-card reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" />
                  <path d="M2 21c0-3 1.9-5.4 5.1-6" />
                </svg>
              </div>
              <h3>Nothing artificial added</h3>
              <p>Only water is in your well during drilling &mdash; no fluids, foams or oils.</p>
            </div>
            <div className="compare-card reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>Gentle on formations</h3>
              <p>No high-pressure air means porous rock is less likely to collapse or clog.</p>
            </div>
            <div className="compare-card reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M8 5h4M8 9h4M8 13h4M8 17h4" />
                  <path d="M16 6l3 3-3 3" />
                </svg>
              </div>
              <h3>Often less depth needed</h3>
              <p>Wells frequently fill faster and easier &mdash; and you pay by the foot, not the hour.</p>
            </div>
            <div className="compare-card reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 14l4-4" />
                  <path d="M3.3 19a10 10 0 1 1 17.4 0" />
                </svg>
              </div>
              <h3>Lower lifetime cost</h3>
              <p>Less casing, cable and pipe, and less wear on your pump over the decades.</p>
            </div>
          </div>
          <p style={{ marginTop: '40px' }} className="reveal">
            <Link className="btn btn--gold" href="/well-drilling">
              Learn about our method{' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </p>
        </div>
      </section>

      {/* About Werner & Sons Section */}
      <section className="section" id="about">
        <div className="container split">
          <div className="split-media reveal">
            <div className="photo-frame">
              <img src="/assets/g4.jpg" alt="Werner &amp; Sons red International drilling rig" width="600" height="750" loading="lazy" decoding="async" />
            </div>
            <div className="photo-tag">
              <strong>Good, old-fashioned equipment</strong>
              <span>A fleet we take real pride in</span>
            </div>
          </div>
          <div className="reveal">
            <span className="eyebrow">About Werner &amp; Sons</span>
            <h2>A family business built on doing it right.</h2>
            <p className="lead">
              Werner &amp; Sons Well Drilling LLC is a family-owned water drilling contractor in Easton, Pennsylvania. For more than 50 years we&rsquo;ve provided the highest quality service to residential, commercial and industrial customers.
            </p>
            <ul className="checks">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>
                  <strong>Clean, efficient work.</strong> Every job is done quickly and without a mess, with as little impact on your property as possible.
                </span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>
                  <strong>We respond right away.</strong> Phones are answered 24 hours a day, including emergencies.
                </span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>
                  <strong>We stand behind our work.</strong> Prompt, professional service you can count on &mdash; just ask your neighbors.
                </span>
              </li>
            </ul>

            <div className="heritage-trust-quote">
              <span className="quote-mark" aria-hidden="true">&#8220;</span>
              <p className="quote-text">
                Prompt, professional service you can count on &mdash; just ask your neighbors.
              </p>
              <div className="quote-meta">
                <span className="quote-stars" aria-label="5 star service">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span className="quote-badge">50+ Years Serving Eastern Pennsylvania</span>
              </div>
            </div>

            <Link className="btn btn--red" href="/estimate">
              Request an Estimate{' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Decorative Antique Brass Divider */}
      <div className="container">
        <div className="brass-divider">
          <span className="line"></span>
          <span className="symbol">&#9670;</span>
          <span className="line"></span>
        </div>
      </div>

      {/* Service Area Section */}
      <section className="section section--sand" id="area">
        <div className="container area">
          <div className="reveal">
            <span className="eyebrow">Service Area</span>
            <h2>Proudly serving Eastern Pennsylvania</h2>
            <p className="lead">Based in Easton, we drill, deepen and service wells throughout the Lehigh Valley and the Poconos.</p>
            <div className="service-region-badge">
              <span className="region-bullet">&#9670;</span>
              <span>Serving Eastern PA &middot; Lehigh Valley &amp; The Poconos</span>
            </div>
            <ul className="county-list">
              <li>Northampton County</li>
              <li>Lehigh County</li>
              <li>Monroe County</li>
              <li>Carbon County</li>
              <li>The Poconos</li>
            </ul>
          </div>
          <div className="info-cards reveal">
            <div className="info-card info-card--accent">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>24-Hour Emergency</h3>
              <p>Phones answered 24 hours a day, 7 days a week.</p>
            </div>
            <div className="info-card">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z" />
                  <circle cx="7" cy="7" r="1.5" />
                </svg>
              </div>
              <h3>Free Estimates</h3>
              <p>Request online or call &mdash; we&rsquo;ll come to you.</p>
            </div>
            <div className="info-card">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <circle cx="12" cy="12" r="2.5" />
                  <path d="M6 12h.01M18 12h.01" />
                </svg>
              </div>
              <h3>Simple Payment</h3>
              <p>We accept cash &amp; personal checks.</p>
            </div>
            <div className="info-card">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 8V6.3c0-.8.2-1.3 1.4-1.3H17V2h-2.6C11.6 2 10.6 3.6 10.6 6.2V8H8v3h2.6v11H14V11h2.7l.4-3z" />
                </svg>
              </div>
              <h3>Follow Along</h3>
              <p>
                <a href="https://www.facebook.com/pages/Werner-and-Sons-Well-Drilling/155665974504295" target="_blank" rel="noopener">
                  Like us on Facebook
                </a>{' '}
                for recent jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Antique Brass Divider */}
      <div className="container">
        <div className="brass-divider">
          <span className="line"></span>
          <span className="symbol">&#9670;</span>
          <span className="line"></span>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="section section--white">
        <div className="container">
          <div className="section-head reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px', flexWrap: 'wrap', maxWidth: 'none' }}>
            <div style={{ maxWidth: '620px' }}>
              <span className="eyebrow">On The Job</span>
              <h2>Our rigs at work</h2>
              <p className="lead" style={{ margin: 0 }}>
                A look at our fleet and recent job sites across the region.
              </p>
            </div>
            <Link className="btn btn--outline" href="/gallery">
              View full gallery{' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="gallery-grid reveal">
            {galleryImages.map((img, idx) => (
              <a
                key={idx}
                href={img.src}
                className={img.class}
                onClick={(e) => {
                  e.preventDefault();
                  openLightbox(galleryImages, idx, e.currentTarget);
                }}
              >
                <img src={img.src} alt={img.alt} width="480" height="360" loading="lazy" decoding="async" />
                <span className="zoom" aria-label="Open full image">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <CtaBand />
    </>
  );
}
