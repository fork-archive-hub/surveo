import ManagementModule from '../lib/ManagementModule';

import { vote } from '../actions';

class VoteModule extends ManagementModule {
  getModuleActions = () => {
    return {
      [vote.create.type]: this.handleVoteCreateAction,
      [vote.get.type]: this.handleVoteGetAction,
    };
  };

  initializeEventListeners = () => {
    this.client.service('votes').on('created', this.handleVoteCreatedEvent);
  };

  handleVoteCreateAction = async (action) => {
    const result = await this.client.service('votes').create({
      surveyId: action.payload.surveyId,
      answerSheet: action.payload.answerSheet,
      token: action.payload.token,
    });

    return vote.create(result);
  };

  handleVoteGetAction = async (action) => {
    const result = await this.client.service('votes').get(action.payload.surveyId);

    return vote.get(result);
  };

  handleVoteCreatedEvent = (data) => {
    this.store.dispatch(vote.events.created(data));
  };
}

export default VoteModule;
