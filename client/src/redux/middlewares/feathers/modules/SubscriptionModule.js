import ManagementModule from '../lib/ManagementModule';

import { subscription } from '../actions';

class SubscriptionModule extends ManagementModule {
  getModuleActions = () => {
    return {
      [subscription.create.type]: this.handleSubscriptionCreateAction,
      [subscription.remove.type]: this.handleSubscriptionRemoveAction,
    };
  };

  handleSubscriptionCreateAction = async (action) => {
    const result = await this.client.service('subscriptions').create({ surveyId: action.payload.surveyId });

    return subscription.create(result);
  };

  handleSubscriptionRemoveAction = async (action) => {
    const result = await this.client.service('subscriptions').remove(action.payload.surveyId);

    return subscription.remove(result);
  };
}

export default SubscriptionModule;
