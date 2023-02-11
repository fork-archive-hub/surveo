module.exports = function (app) {
  const modelName = 'trackers';
  const mongooseClient = app.get('mongooseClient');

  const TrackerSchema = new mongooseClient.Schema(
    {
      surveyId: {
        type: mongooseClient.Schema.Types.ObjectId,
        ref: 'surveys',
      },
      ips: [String],
    },
    {
      timestamps: true,
    }
  );

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }

  return mongooseClient.model(modelName, TrackerSchema);
};
