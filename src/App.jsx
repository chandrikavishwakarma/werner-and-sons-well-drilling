import { useEffect, useState, useRef } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { LightboxProvider } from './context/LightboxContext';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileBar from './components/MobileBar';
import Home from './pages/Home';
import WellDrilling from './pages/WellDrilling';
import WellDeepening from './pages/WellDeepening';
import WaterTreatment from './pages/WaterTreatment';
import PumpService from './pages/PumpService';
import GalleryPage from './pages/GalleryPage';
import EstimatePage from './pages/EstimatePage';
import ResourcesPage from './pages/ResourcesPage';

const pageMetadata = {
  '/': {
    title: 'Werner & Sons Well Drilling | Water Well Contractor in Easton, PA',
    description: 'Family-owned water well drilling contractor in Easton, PA for 50+ years. Cable tool well drilling, well deepening, pumps and water treatment. 24-hour emergency service. Free estimates.',
  },
  '/well-drilling': {
    title: 'Well Drilling | Werner & Sons Well Drilling | Easton, PA',
    description: 'Learn about cable tool water well drilling for homes and businesses from Werner & Sons Well Drilling in Easton, Pennsylvania.',
  },
  '/well-deepening': {
    title: 'Well Deepening & Tanks | Werner & Sons | Easton, PA',
    description: 'Well deepening and pressure tank services from Werner & Sons Well Drilling in Easton, Pennsylvania. Request a free estimate.',
  },
  '/water-treatment': {
    title: 'Water Treatment | Werner & Sons Well Drilling | Easton, PA',
    description: 'Water softeners, iron removal, acid neutralizers and UV purification systems for homes and businesses in Eastern Pennsylvania.',
  },
  '/pump-service': {
    title: 'Well Pump Service | Werner & Sons Well Drilling | Easton, PA',
    description: 'Well pump sales, service, repair and installation in Easton, Pennsylvania. Phones are answered 24 hours a day for emergencies.',
  },
  '/gallery': {
    title: 'Project Gallery | Werner & Sons Well Drilling | Easton, PA',
    description: 'View Werner & Sons Well Drilling equipment, fleet and job site photos from Eastern Pennsylvania.',
  },
  '/estimate': {
    title: 'Request a Free Estimate | Werner & Sons Well Drilling',
    description: 'Request a free estimate for well drilling, well deepening, water treatment or pump service from Werner & Sons in Easton, Pennsylvania.',
  },
  '/resources': {
    title: 'Well & Water Resources | Werner & Sons Well Drilling',
    description: 'Homeowner information about planning a well project, water quality, well output, and pump concerns from Werner & Sons Well Drilling.',
  },
};

function AppContent() {
  const { currentPath } = useNavigation();
  const [routeAnnouncement, setRouteAnnouncement] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    const metadata = pageMetadata[currentPath] || pageMetadata['/'];
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.description);

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const pageName = metadata.title.split('|')[0].trim();
    setRouteAnnouncement(`Navigated to ${pageName}`);

    if (!window.location.hash) {
      requestAnimationFrame(() => {
        const heading = document.querySelector('main h1');
        if (heading) {
          heading.setAttribute('tabindex', '-1');
          heading.focus({ preventScroll: true });
        }
      });
    }
  }, [currentPath]);

  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add('in');
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );
      items.forEach((el) => io.observe(el));
      return () => io.disconnect();
    } else {
      items.forEach((el) => el.classList.add('in'));
    }
  }, [currentPath]);

  const renderPage = () => {
    switch (currentPath) {
      case '/well-drilling':
        return <WellDrilling />;
      case '/well-deepening':
        return <WellDeepening />;
      case '/water-treatment':
        return <WaterTreatment />;
      case '/pump-service':
        return <PumpService />;
      case '/gallery':
        return <GalleryPage />;
      case '/estimate':
        return <EstimatePage />;
      case '/resources':
        return <ResourcesPage />;
      case '/':
      default:
        return <Home />;
    }
  };

  return (
    <>
      <a className="skip" href="#main" style={{ position: 'absolute', left: '-9999px' }}>
        Skip to content
      </a>
      <div id="route-announcer" className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {routeAnnouncement}
      </div>
      <Topbar />
      <Header />
      <main id="main">{renderPage()}</main>
      <Footer />
      <MobileBar />
    </>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <LightboxProvider>
        <AppContent />
      </LightboxProvider>
    </NavigationProvider>
  );
}
