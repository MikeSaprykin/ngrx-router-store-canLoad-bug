import {
  ActionWithPayload,
  lookUpMatcher
} from 'app/store/store.helpers';

import * as types from '../actions/login.types';
import {createSelector} from '@ngrx/store';

export interface LoginState {
  error: Object;
  pending: boolean;
}

const initialState: LoginState = {
  error: null,
  pending: false
};

const lookUp = {
  [types.LOGIN_USER]: (state, action) => {
    return {...state, pending: true};
  },
  [types.SET_LOGIN_USER_ERROR]: (state, action) => {
    return { ...state, pending: false, error: action.payload };
  },
  [types.REMOVE_LOGIN_USER_ERROR]: (state, action) => {
    return { ...state, error: null };
  },
  [types.LOGIN_USER_SUCCESS]: (state, action) => {
    return { ...state, pending: false, error: null };
  }
};

export function loginReducer(
  state: LoginState = initialState,
  action: ActionWithPayload<any>
): LoginState {
  return lookUpMatcher<LoginState>(lookUp, state, action);
}

export const getLoginState = (state): LoginState => state.login;

export const getError = (state: LoginState) => state.error;
export const getPending = (state: LoginState) => state.pending;

export const getErrorState = createSelector(getLoginState, getError);
export const getPendingState = createSelector(getLoginState, getPending);
