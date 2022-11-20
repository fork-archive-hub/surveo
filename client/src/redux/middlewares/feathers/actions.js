import { createAction } from '@reduxjs/toolkit';

export const authentication = {
  login: createAction('feathers/authentication/login'),
  logout: createAction('feathers/authentication/logout'),
  reauthenticate: createAction('feathers/authentication/reauthenticate'),

  events: {
    authenticated: createAction('feathers/authentication/events/authenticated'),
    logout: createAction('feathers/authentication/events/logout'),
  },
};

export const user = {
  create: createAction('feathers/user/create'),
};

export const survey = {
  create: createAction('feathers/survey/create'),
  find: createAction('feathers/survey/find'),
  get: createAction('feathers/survey/get'),
  patch: createAction('feathers/survey/patch'),
  remove: createAction('feathers/survey/remove'),
};

export const subscription = {
  create: createAction('feathers/subscription/create'),
  remove: createAction('feathers/subscription/remove'),
};

export const vote = {
  create: createAction('feathers/vote/create'),
  get: createAction('feathers/vote/get'),

  events: {
    created: createAction('feathers/vote/events/created'),
  },
};
