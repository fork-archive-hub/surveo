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

    this.client.reAuthenticate().catch((error) => {
      console.log('Reauthentication failed:', error.message);
    });
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
    this.store.dispatch(authentication.onLogin(data));
  };

  handleLogoutEvent = (data) => {
    this.store.dispatch(authentication.onLogout(data));
  };
}

export default AuthenticationModule;
