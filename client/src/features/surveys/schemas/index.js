import Joi from 'joi';

export const answerFormSchema = Joi.object().keys({
  text: Joi.string().min(2).max(140).required().label('answer'),
  index: Joi.number().min(0).required().label('index'),
});

export const subquestionFormSchema = Joi.object().keys({
  text: Joi.string().min(3).max(140).required().label('subquestion'),
  requirements: Joi.array().items(Joi.number().min(0)).required().label('requirements'),
  answers: Joi.array().items(answerFormSchema).min(2).required().label('answers'),
});

export const questionFormSchema = Joi.object().keys({
  text: Joi.string().min(3).max(140).required().label('question'),
  answers: Joi.array().items(answerFormSchema).min(2).required().label('answers'),
  subquestions: Joi.array().items(subquestionFormSchema).required().label('subquestions'),
});

export const surveyInformationFormSchema = Joi.object().keys({
  name: Joi.string().min(3).max(240).required().label('name'),
  open: Joi.boolean().default(true).label('open'),
  protection: Joi.object()
    .keys({
      captcha: Joi.boolean().default(false).label('captcha'),
      ipRestriction: Joi.boolean().default(false).label('ip restriction'),
    })
    .required(),
});

export const surveyFormSchema = surveyInformationFormSchema.append({
  questions: Joi.array().items(questionFormSchema).min(1).required().label('questions'),
});
