import ManagementModule from '../lib/ManagementModule';

import { authentication } from '../actions';

class AuthenticationModule extends ManagementModule {
  getModuleActions = () => {
    return {
      [authentication.login.type]: this.handleLoginAction,
      [authentication.logout.type]: this.handleLogoutAction,
      [authentication.reauthenticate.type]: this.handleReauthenticateAction,
    };
  };

  initializeEventListeners = () => {
    this.client.on('authenticated', this.handleAuthenticatedEvent);
    this.client.on('logout', this.handleLogoutEvent);

    if (localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_STORAGE_KEY) !== null) {
      this.client.reAuthenticate().catch((error) => {
        window.location.reload();

        console.log('Reauthentication failed:', error.message);
      });
    }
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

  handleAuthenticatedEvent = (data) => {
    localStorage.setItem(process.env.REACT_APP_AUTH_USER_STORAGE_KEY, JSON.stringify(data.user));
    this.store.dispatch(authentication.onLogin(data));
  };

  handleLogoutEvent = (data) => {
    localStorage.removeItem(process.env.REACT_APP_AUTH_USER_STORAGE_KEY);
    this.store.dispatch(authentication.onLogout(data));
  };
}

export default AuthenticationModule;
