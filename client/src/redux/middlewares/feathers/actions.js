import { createAction } from '@reduxjs/toolkit';

export const authentication = {
  register: createAction('feathers/authentication/login'),
  login: createAction('feathers/authentication/login'),
  logout: createAction('feathers/authentication/logout'),
};

export const survey = {
  create: createAction('feathers/survey/create'),
  find: createAction('feathers/survey/find'),
  get: createAction('feathers/survey/get'),
  patch: createAction('feathers/survey/patch'),
  remove: createAction('feathers/survey/remove'),
};
