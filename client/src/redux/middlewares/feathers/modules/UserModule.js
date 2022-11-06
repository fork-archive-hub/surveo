import ManagementModule from '../lib/ManagementModule';

import { user } from '../actions';

class UserModule extends ManagementModule {
  getModuleActions = () => {
    return {
      [user.create.type]: this.handleUserCreateAction,
    };
  };

  handleUserCreateAction = async (action) => {
    const result = await this.client.service('users').create({
      username: action.payload.username,
      password: action.payload.password,
    });

    return user.create(result);
  };
}

export default UserModule;
