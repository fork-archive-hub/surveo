import { vote } from '../actions';

import { setSurveyData } from '../../../slices/survey';

export default class VoteModule {
  constructor(client, store) {
    this.client = client;
    this.store = store;
  }

  getModuleActions = () => {
    return {
      [vote.create.type]: this.handleVoteCreateAction,
      [vote.get.type]: this.handleVoteGetAction,
    };
  };

  initializeEventListeners = () => {
    this.client.service('votes').on('created', this.handleVoteCreatedEvent);
  };

  handleVoteCreatedEvent = (data) => {
    if (this.store.getState().survey.data._id === data._id) {
      this.store.dispatch(
        setSurveyData({
          data: data,
        })
      );
    }
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
}
