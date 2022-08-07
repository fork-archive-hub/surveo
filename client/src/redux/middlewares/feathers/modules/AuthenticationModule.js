import { authentication } from '../actions';

export default class AuthenticationModule {
  constructor(client, store) {
    this.client = client;
    this.store = store;
  }

  getModuleActions = () => {
    return {
      [authentication.register.type]: this.handleRegisterAction,
      [authentication.login.type]: this.handleLoginAction,
      [authentication.logout.type]: this.handleLogoutAction,
      [authentication.reauthenticate.type]: this.handleReauthenticateAction,
    };
  };

  initializeEventListeners = () => {
    this.client.on('authenticated', this.handleAuthenticatedEvent);
    this.client.on('logout', this.handleLogoutEvent);
  };

  handleAuthenticatedEvent = (data) => {
    this.store.dispatch(authentication.onLogin(data));
  };

  handleLogoutEvent = (data) => {
    this.store.dispatch(authentication.onLogout(data));
  };

  handleRegisterAction = async (action) => {
    const result = await this.client.service('users').create({
      username: action.payload.username,
      password: action.payload.password,
    });

    return authentication.register(result);
  };

  handleLoginAction = async (action) => {
    const result = await this.client.authenticate({
      strategy: 'local',
      username: action.payload.username,
      password: action.payload.password,
    });

    return authentication.login(result);
  };

  handleLogoutAction = async () => {
    const result = await this.client.logout();

    return authentication.logout(result);
  };

  handleReauthenticateAction = async () => {
    const result = await this.client.reAuthenticate();

    return authentication.reauthenticate(result);
  };
}
