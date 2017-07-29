import { Action } from '@ngrx/store';

import { ActionWithPayload } from 'app/store/store.helpers';

import * as types from './login.types';

export interface LoginUserPayload {
  username: string;
  password: string;
}

export const loginUser = (
  payload: LoginUserPayload
): ActionWithPayload<LoginUserPayload> => {
  return {
    type: types.LOGIN_USER,
    payload,
  };
};

export const setLoginUserError = (
  payload: any
): ActionWithPayload<any> => {
  return {
    type: types.SET_LOGIN_USER_ERROR,
    payload,
  };
};

export const removeLoginUserError = (): Action => {
  return {
    type: types.REMOVE_LOGIN_USER_ERROR,
  };
};

export const loginUserSuccess = (payload): ActionWithPayload<any> => {
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload,
  };
};
