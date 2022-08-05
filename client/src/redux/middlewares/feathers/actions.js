import { createAction } from '@reduxjs/toolkit';

export const register = createAction('feathers/register');
export const login = createAction('feathers/login');
export const logout = createAction('feathers/logout');
