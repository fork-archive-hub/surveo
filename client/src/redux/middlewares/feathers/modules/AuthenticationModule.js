import { register, login, logout } from '../actions';

import { setAuthenticatedUser } from '../../../slices/authentication';

export default class AuthenticationModule {
  constructor(client, store) {
    this.client = client;
    this.store = store;
  }

  getModuleActions = () => {
    return {
      [register.type]: this.handleRegisterAction,
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
        authenticatedUser: data.user,
      })
    );
  };

  handleLogoutEvent = () => {
    this.store.dispatch(
      setAuthenticatedUser({
        isAuthenticated: false,
        authenticatedUser: {},
      })
    );
  };

  handleRegisterAction = async (action) => {
    const result = await this.client.service('users').create({
      username: action.payload.username,
      password: action.payload.password,
    });

    return register(result);
  };

  handleLoginAction = async (action) => {
    const result = await this.client.authenticate({
      strategy: 'local',
      username: action.payload.username,
      password: action.payload.password,
    });

    return login(result);
  };

  handleLogoutAction = async () => {
    const result = await this.client.logout();

    return logout(result);
  };
}
