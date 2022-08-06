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
    };
  };

  initializeEventListeners = () => {};

  handleSurveyCreateAction = async (actions) => {
    const result = await this.client.service('surveys').create(actions.payload);

    return survey.create(result);
  };

  handleSurveyFindAction = async (action) => {
    const result = await this.client.service('surveys').find({ authorId: action.payload.authorId });

    return survey.find(result);
  };

  handleSurveyGetAction = async (action) => {
    const result = await this.client.service('surveys').get(action.payload.id);

    return survey.get(result);
  };

  handleSurveyPatchAction = async (action) => {
    const result = await this.client.service('surveys').patch(action.payload.id, action.payload.data);

    return survey.patch(result);
  };

  handleSurveyRemoveAction = async (action) => {
    const result = await this.client.service('surveys').remove(action.payload.id);

    return survey.remove(result);
  };
}
