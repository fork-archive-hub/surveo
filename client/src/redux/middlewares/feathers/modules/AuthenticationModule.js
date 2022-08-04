import { login, logout } from '../../../slices/authentication';

export default class AuthenticationModule {
  constructor(client, store) {
    this.client = client;
    this.store = store;
  }

  handleLoginAction = async (action) => {
    const result = await this.client.authenticate({
      strategy: 'local',
      username: action.payload.username,
      password: action.payload.password,
    });

    return login(result.user);
  };

  handleLogoutAction = async () => {
    await this.client.logout();

    return logout();
  };

  getModuleActions = () => {
    return {
      [login.type]: this.handleLoginAction,
      [logout.type]: this.handleLogoutAction,
    };
  };
}
