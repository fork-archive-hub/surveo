import { survey } from '../actions';

export default class SurveyModule {
  constructor(client, store) {
    this.client = client;
    this.store = store;
  }

  getModuleActions = () => {
    return {
      [survey.create.type]: this.handleSurveyCreateAction,
      [survey.find.type]: this.handleSurveyFindAction,
      [survey.get.type]: this.handleSurveyGetAction,
      [survey.patch.type]: this.handleSurveyPatchAction,
      [survey.remove.type]: this.handleSurveyRemoveAction,

      [survey.subscribe.type]: this.handleSurveySubscribeAction,
      [survey.unsubscribe.type]: this.handleSurveyUnsubscribeAction,
    };
  };

  initializeEventListeners = () => {};

  handleSurveyCreateAction = async (action) => {
    const result = await this.client.service('surveys').create(action.payload.data);

    return survey.create(result);
  };

  handleSurveyFindAction = async (action) => {
    const result = await this.client.service('surveys').find({ query: { authorId: action.payload.authorId } });

    return survey.find(result);
  };

  handleSurveyGetAction = async (action) => {
    const result = await this.client.service('surveys').get(action.payload.surveyId);

    return survey.get(result);
  };

  handleSurveyPatchAction = async (action) => {
    const result = await this.client.service('surveys').patch(action.payload.surveyId, action.payload.data);

    return survey.patch(result);
  };

  handleSurveyRemoveAction = async (action) => {
    const result = await this.client.service('surveys').remove(action.payload.surveyId);

    return survey.remove(result);
  };

  handleSurveySubscribeAction = async (action) => {
    const result = await this.client.service('subscriptions').create({ surveyId: action.payload.surveyId });

    return survey.subscribe(result);
  };

  handleSurveyUnsubscribeAction = async (action) => {
    const result = await this.client.service('subscriptions').remove(action.payload.surveyId);

    return survey.unsubscribe(result);
  };
}
