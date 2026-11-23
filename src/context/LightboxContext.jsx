import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

const LightboxContext = createContext({
  openLightbox: () => {},
  closeLightbox: () => {},
});

export function LightboxProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const triggerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const previousOverflowRef = useRef('');
  const closingTimeoutRef = useRef(null);
  const isClosingRef = useRef(false);

  useEffect(() => {
    isClosingRef.current = isClosing;
  }, [isClosing]);

  const openLightbox = (imageList, index = 0, trigger = document.activeElement) => {
    if (closingTimeoutRef.current) {
      clearTimeout(closingTimeoutRef.current);
      closingTimeoutRef.current = null;
    }
    isClosingRef.current = false;
    setIsClosing(false);
    triggerRef.current = trigger;
    setImages(imageList);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = useCallback(() => {
    if (!isOpen || isClosingRef.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      if (closingTimeoutRef.current) {
        clearTimeout(closingTimeoutRef.current);
        closingTimeoutRef.current = null;
      }
      isClosingRef.current = false;
      setIsClosing(false);
      setIsOpen(false);
      return;
    }

    isClosingRef.current = true;
    setIsClosing(true);
    closingTimeoutRef.current = setTimeout(() => {
      isClosingRef.current = false;
      setIsClosing(false);
      setIsOpen(false);
      closingTimeoutRef.current = null;
    }, 240);
  }, [isOpen]);

  const showNext = useCallback(() => {
    if (isClosingRef.current) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const showPrev = useCallback(() => {
    if (isClosingRef.current) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    return () => {
      if (closingTimeoutRef.current) {
        clearTimeout(closingTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    previousOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (isClosingRef.current) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        showPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        showNext();
      } else if (e.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) {
          e.preventDefault();
          dialogRef.current?.focus();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && (document.activeElement === first || !dialogRef.current.contains(document.activeElement))) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && (document.activeElement === last || !dialogRef.current.contains(document.activeElement))) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflowRef.current;
      if (triggerRef.current?.isConnected) triggerRef.current.focus();
    };
  }, [isOpen, closeLightbox, showNext, showPrev]);

  const currentImage = images[currentIndex] || {};

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      <div inert={isOpen && !isClosing} aria-hidden={(isOpen && !isClosing) || undefined}>
        {children}
      </div>
      {isOpen && (
        <div
          ref={dialogRef}
          className={`lightbox open${isClosing ? ' closing' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          tabIndex={-1}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-img-wrap">
              <img src={currentImage.src} alt={currentImage.alt || 'Werner & Sons well drilling equipment photo'} />
            </div>
            {currentImage.alt && (
              <div className="lightbox-caption">
                <span className="caption-text">{currentImage.alt}</span>
              </div>
            )}
          </div>

          <button ref={closeButtonRef} className="lb-close" aria-label="Close photo viewer" onClick={closeLightbox}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button className="lb-prev" aria-label="Previous photo" onClick={showPrev}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="lb-next" aria-label="Next photo" onClick={showNext}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
          
          <div className="lb-footer-bar">
            <span className="lb-count">Photo {currentIndex + 1} of {images.length}</span>
            <span className="lb-hint">ESC to close &middot; &larr; &rarr; to navigate</span>
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLightbox() {
  return useContext(LightboxContext);
}
