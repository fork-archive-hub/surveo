class ManagementModule {
  constructor(client, store) {
    this.client = client;
    this.store = store;
  }

  getModuleActions = () => {
    return {};
  };

  initializeEventListeners = () => {};
}

export default ManagementModule;
