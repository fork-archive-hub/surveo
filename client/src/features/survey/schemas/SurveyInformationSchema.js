import Joi from 'joi';

export const SurveyInformationSchema = Joi.object().keys({
  name: Joi.string().min(3).max(240).required().label('name'),
  open: Joi.boolean().default(true).label('open'),
  protection: Joi.object()
    .keys({
      captcha: Joi.boolean().default(false).label('captcha'),
      ipRestriction: Joi.boolean().default(false).label('ip restriction'),
    })
    .required(),
});
