import { createContext, useContext, useState, useEffect } from 'react';

const NavigationContext = createContext({
  currentPath: '/',
  currentSearch: '',
  navigate: () => {},
});

const normalizePath = (path) => {
  const normalized = path.replace(/\/+$/, '');
  return normalized || '/';
};

export function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname || '/'));
  const [currentSearch, setCurrentSearch] = useState(window.location.search || '');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname || '/'));
      setCurrentSearch(window.location.search || '');
      if (window.location.hash) {
        setTimeout(() => {
          const el = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to) => {
    if (!to) return;
    if (to.startsWith('tel:') || to.startsWith('mailto:') || to.startsWith('http')) {
      window.location.href = to;
      return;
    }

    const target = new URL(to, window.location.href);
    const targetPath = normalizePath(target.pathname || currentPath);
    window.history.pushState({}, '', `${target.pathname}${target.search}${target.hash}`);
    setCurrentPath(targetPath);
    setCurrentSearch(target.search);

    if (target.hash) {
      setTimeout(() => {
        const el = document.getElementById(decodeURIComponent(target.hash.slice(1)));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 70);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPath, currentSearch, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNavigation() {
  return useContext(NavigationContext);
}

export function Link({ href, children, className, style, onClick, ...props }) {
  const { currentPath, navigate } = useNavigation();
  const isCurrent = currentPath === href;

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (
      !e.defaultPrevented &&
      e.button === 0 &&
      !e.metaKey &&
      !e.altKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !href.startsWith('http') &&
      !href.startsWith('tel:') &&
      !href.startsWith('mailto:')
    ) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <a
      href={href}
      className={className}
      style={style}
      onClick={handleClick}
      aria-current={isCurrent ? 'page' : undefined}
      {...props}
    >
      {children}
    </a>
  );
}
