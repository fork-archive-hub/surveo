const uniqueValidator = require('mongoose-unique-validator');

module.exports = function (app) {
  const modelName = 'users';
  const mongooseClient = app.get('mongooseClient');

  const UserSchema = new mongooseClient.Schema(
    {
      username: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'Username is required'],
        minlength: [3, 'Username must be at least 3 characters long'],
        maxLength: [15, 'Username cannot be more than 15 characters long'],
        match: [/^[a-z0-9]*$/, 'Username can only contain letters and numbers'],
      },
      password: {
        type: String,
        required: [true, 'Password is required'],
      },
    },
    {
      timestamps: true,
    }
  );
  UserSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }

  return mongooseClient.model(modelName, UserSchema);
};
