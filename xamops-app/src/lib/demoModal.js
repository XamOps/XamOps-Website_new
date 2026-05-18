import { createContext, useContext } from 'react';

export const DemoModalCtx = createContext({ open: false, setOpen: () => {} });
export const useDemoModal = () => useContext(DemoModalCtx);
