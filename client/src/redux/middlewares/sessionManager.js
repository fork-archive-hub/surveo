import { feathers } from '../../api/feathers';

import { actions } from '../slices/authentication';

export const sessionManager = (store) => {
  const handleLogin = (data) => {
    store.dispatch(actions.login(data));
  };

  const handleLogout = () => {
    store.dispatch(actions.logout());
  };

  const tryReAuthenticate = () => {
    if (localStorage.getItem(process.env.REACT_APP_FEATHERS_JWT_STORAGE_KEY)) {
      feathers.client.reAuthenticate().catch(() => {
        window.location.reload();
      });
    }
  };

  feathers.client.on('authenticated', handleLogin);
  feathers.client.on('logout', handleLogout);

  tryReAuthenticate();

  return (next) => (action) => {
    return next(action);
  };
};
