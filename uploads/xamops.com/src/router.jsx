import React, { createContext, useContext, useEffect, useState } from 'react';

const RouterCtx = createContext({ path: '/', go: () => {} });

function readHash() {
  const h = window.location.hash || '#/';
  return h.replace(/^#/, '') || '/';
}

export function RouterProvider({ children }) {
  const [path, setPath] = useState(readHash());
  useEffect(() => {
    const onHash = () => setPath(readHash());
    window.addEventListener('hashchange', onHash);
    if (!window.location.hash) window.location.hash = '#/';
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [path]);
  const go = (to) => { window.location.hash = '#' + to; };
  return <RouterCtx.Provider value={{ path, go }}>{children}</RouterCtx.Provider>;
}
export function useRouter() { return useContext(RouterCtx); }

export function Link({ to, className, children, ...rest }) {
  const { go, path } = useRouter();
  const active = path === to;
  return (
    <a href={'#' + to} className={className} aria-current={active ? 'page' : undefined}
       onClick={(e) => { e.preventDefault(); go(to); }} {...rest}>
      {children}
    </a>
  );
}
