import {
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import { AppState } from 'app/store';
import {
  LoginState,
  loginReducer,
  getErrorState,
  getPendingState
} from './login.reducer';

export interface State extends AppState {
  login: LoginState;
}

export const selectLoginState = createFeatureSelector<LoginState>('login');
export const getError = createSelector(selectLoginState, getErrorState);
export const getPending = createSelector(selectLoginState, getPendingState);


export const reducer = {
  login: loginReducer
};
