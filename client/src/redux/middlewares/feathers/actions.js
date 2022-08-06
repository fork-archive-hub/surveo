import { createAction } from '@reduxjs/toolkit';

export const authentication = {
  register: createAction('feathers/authentication/register'),
  login: createAction('feathers/authentication/login'),
  logout: createAction('feathers/authentication/logout'),
};

export const survey = {
  create: createAction('feathers/survey/create'),
  find: createAction('feathers/survey/find'),
  get: createAction('feathers/survey/get'),
  patch: createAction('feathers/survey/patch'),
  remove: createAction('feathers/survey/remove'),

  subscribe: createAction('feathers/survey/subscribe'),
  unsubscribe: createAction('feathers/survey/unsubscribe'),
};
