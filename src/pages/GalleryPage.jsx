import { useMemo, useState, useEffect, useRef } from 'react';
import { Link } from '../context/NavigationContext';
import { useLightbox } from '../context/LightboxContext';
import Strata from '../components/Strata';
import CtaBand from '../components/CtaBand';
import galleryImages from '../data/galleryImages';

export default function GalleryPage() {
  const { openLightbox } = useLightbox();
  const [activeCategory, setActiveCategory] = useState('All Photos');
  const gridRef = useRef(null);

  const categories = useMemo(
    () => ['All Photos', ...new Set(galleryImages.map((image) => image.category).filter(Boolean))],
    []
  );
  const visibleImages = activeCategory === 'All Photos'
    ? galleryImages
    : galleryImages.filter((image) => image.category === activeCategory);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const items = grid.querySelectorAll('.gallery-image-reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          } else {
            entry.target.classList.remove('in');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    );

    items.forEach((item) => io.observe(item));

    return () => io.disconnect();
  }, [visibleImages]);

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
          <div className="gallery-filter-bar" role="group" aria-label="Filter gallery photos">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={`gallery-filter${activeCategory === category ? ' active' : ''}`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="gallery-result-count" role="status" aria-live="polite">
            Showing {visibleImages.length} of {galleryImages.length} photos
          </p>
          <div ref={gridRef} className="gallery-grid">
            {visibleImages.map((img, idx) => (
              <a
                key={img.id}
                href={img.src}
                className={`${img.className ? `${img.className} ` : ''}gallery-image-reveal`}
                onClick={(e) => {
                  e.preventDefault();
                  openLightbox(visibleImages, idx, e.currentTarget);
                }}
              >
                <img src={img.src} alt={img.alt} width="600" height="450" loading="lazy" decoding="async" />
                <span className="zoom" aria-hidden="true">
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
