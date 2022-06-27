module.exports = function (app) {
  const modelName = 'surveys';
  const mongooseClient = app.get('mongooseClient');

  const AnswerSchema = new mongooseClient.Schema({
    index: {
      type: Number,
      required: [true, 'Answer index is required'],
    },
    text: {
      type: String,
      required: [true, 'Answer text is required!'],
      minlength: [2, 'Answer text must be at least 2 characters long!'],
      maxLength: [140, 'Answer text cannot be more than 140 characters long!'],
    },
    votes: {
      type: Number,
      default: 0,
      min: [0, 'Vote count cannot be less than 0!'],
    },
  });

  const SubquestionSchema = new mongooseClient.Schema({
    requirements: [Number],
    text: {
      type: String,
      required: [true, 'Question text is required!'],
      minlength: [3, 'Question text must be at least 3 characters long!'],
      maxLength: [140, 'Question text cannot be more than 140 characters long!'],
    },
    answers: [AnswerSchema],
  });

  const QuestionSchema = new mongooseClient.Schema({
    text: {
      type: String,
      required: [true, 'Question text is required!'],
      minlength: [3, 'Question text must be at least 3 characters long!'],
      maxLength: [140, 'Question text cannot be more than 140 characters long!'],
    },
    answers: [AnswerSchema],
    subquestions: [SubquestionSchema],
  });

  const SurveySchema = new mongooseClient.Schema(
    {
      authorId: {
        type: mongooseClient.Schema.Types.ObjectId,
        ref: 'users',
      },
      name: {
        type: String,
        required: [true, 'Survey name is required!'],
        minlength: [3, 'Survey name must be at least 3 characters long!'],
        maxLength: [240, 'Survey name cannot be more than 240 characters long!'],
      },
      protection: {
        captcha: {
          type: Boolean,
          default: false,
        },
        ipRestriction: {
          type: Boolean,
          default: false,
        },
      },
      questions: [QuestionSchema],
      ips: [String],
    },
    {
      timestamps: true,
    }
  );

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }

  return mongooseClient.model(modelName, SurveySchema);
};
