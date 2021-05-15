import { createContext } from 'react';

const UsedContext = () =>
  createContext({
    showDrawer: false,
    toggleCheckoutDrawer: () => {},
  });

export default UsedContext;
