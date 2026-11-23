import { Link } from '../context/NavigationContext';
import { useLightbox } from '../context/LightboxContext';
import Strata from '../components/Strata';
import CtaBand from '../components/CtaBand';

export default function GalleryPage() {
  const { openLightbox } = useLightbox();

  const galleryImages = [
    { src: '/assets/g3.jpg', alt: 'Werner & Sons Well Drilling \u2014 photo 1', class: 'wide' },
    { src: '/assets/g9.jpg', alt: 'Werner & Sons Well Drilling \u2014 photo 2', class: 'tall' },
    { src: '/assets/g2.jpg', alt: 'Werner & Sons Well Drilling \u2014 photo 3', class: 'tall' },
    { src: '/assets/g4.jpg', alt: 'Werner & Sons Well Drilling \u2014 photo 4', class: '' },
    { src: '/assets/g10.jpg', alt: 'Werner & Sons Well Drilling \u2014 photo 5', class: '' },
    { src: '/assets/g5.jpg', alt: 'Werner & Sons Well Drilling \u2014 photo 6', class: 'wide' },
    { src: '/assets/drilling.jpg', alt: 'Werner & Sons Well Drilling \u2014 photo 7', class: 'tall' },
    { src: '/assets/g7.jpg', alt: 'Werner & Sons Well Drilling \u2014 photo 8', class: '' },
    { src: '/assets/g1.jpg', alt: 'Werner & Sons Well Drilling \u2014 photo 9', class: 'tall' },
    { src: '/assets/g6.jpg', alt: 'Werner & Sons Well Drilling \u2014 photo 10', class: '' },
    { src: '/assets/g11.jpg', alt: 'Werner & Sons Well Drilling \u2014 photo 11', class: 'tall' },
    { src: '/assets/g8.jpg', alt: 'Werner & Sons Well Drilling \u2014 photo 12', class: 'wide' },
    { src: '/assets/about.jpg', alt: 'Werner & Sons Well Drilling \u2014 photo 13', class: '' },
    { src: '/assets/deepening.jpg', alt: 'Werner & Sons Well Drilling \u2014 photo 14', class: '' },
    { src: '/assets/treatment.jpg', alt: 'Werner & Sons Well Drilling \u2014 photo 15', class: '' },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Gallery</span>
          </nav>
          <span className="eyebrow">Gallery</span>
          <h1>Our fleet &amp; job sites</h1>
          <p className="lead">Good, old-fashioned equipment, cared for with pride. Tap any photo to view it larger.</p>
        </div>
        <Strata />
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((img, idx) => (
              <a
                key={idx}
                href={img.src}
                className={`${img.class} reveal`}
                onClick={(e) => {
                  e.preventDefault();
                  openLightbox(galleryImages, idx, e.currentTarget);
                }}
              >
                <img src={img.src} alt={img.alt} width="600" height="450" loading="lazy" decoding="async" />
                <span className="zoom">
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

      <CtaBand />
    </>
  );
}
