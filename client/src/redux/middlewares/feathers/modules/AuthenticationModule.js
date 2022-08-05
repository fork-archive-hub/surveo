import { login, logout } from '../actions';

import { setAuthenticatedUser } from '../../../slices/authentication';

export default class AuthenticationModule {
  constructor(client, store) {
    this.client = client;
    this.store = store;
  }

  getModuleActions = () => {
    return {
      [login.type]: this.handleLoginAction,
      [logout.type]: this.handleLogoutAction,
    };
  };

  initializeEventListeners = () => {
    this.client.on('authenticated', this.handleAuthenticatedEvent);
    this.client.on('logout', this.handleLogoutEvent);
  };

  handleAuthenticatedEvent = (data) => {
    this.store.dispatch(
      setAuthenticatedUser({
        isAuthenticated: true,
        user: data.user,
      })
    );
  };

  handleLogoutEvent = () => {
    this.store.dispatch(
      setAuthenticatedUser({
        isAuthenticated: false,
        user: {},
      })
    );
  };

  handleLoginAction = async (action) => {
    await this.client.authenticate({
      strategy: 'local',
      username: action.payload.username,
      password: action.payload.password,
    });
  };

  handleLogoutAction = async () => {
    await this.client.logout();
  };
}
