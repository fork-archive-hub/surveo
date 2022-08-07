import { createAction } from '@reduxjs/toolkit';

export const authentication = {
  register: createAction('feathers/authentication/register'),
  login: createAction('feathers/authentication/login'),
  logout: createAction('feathers/authentication/logout'),
  reauthenticate: createAction('feathers/authentication/reauthenticate'),

  onLogin: createAction('feathers/authentication/onLogin'),
  onLogout: createAction('feathers/authentication/onLogout'),
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

export const vote = {
  create: createAction('feathers/vote/create'),
  get: createAction('feathers/vote/get'),

  onCreated: createAction('feathers/vote/onCreated'),
};
