import { createAction } from '@reduxjs/toolkit';

export const authentication = {
  register: createAction('feathers/authentication/login'),
  login: createAction('feathers/authentication/login'),
  logout: createAction('feathers/authentication/logout'),
};
