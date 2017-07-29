import * as types from '../actions/login.types';
import {
  getLoginState,
  loginReducer,
  getError,
  getPending
} from './login.reducer';

describe('loginReducer tests: ', () => {

  const initialLoginState = {
    error: null,
    pending: false
  };

  it('should be defined', () => {
    expect(loginReducer).toBeDefined();
  });

  it('should return initial state', () => {
    const result = loginReducer(undefined, { type: 'UNKNOWN_ACTION' });
    expect(result).toEqual(initialLoginState);
  });

  it(`should return state equal to expectedResult on ${types.LOGIN_USER} action`, () => {
    const expectedResult = {
      error: null,
      pending: true
    };
    const result = loginReducer(initialLoginState, { type: types.LOGIN_USER });
    expect(result).toEqual(expectedResult);
  });

  it(`should return state equal to expectedResult on ${types.SET_LOGIN_USER_ERROR} action`,
    () => {
      const expectedResult = {
        error: { msg: 'New error' },
        pending: false
      };
      const setLoginUserErrorAction = {
        type: types.SET_LOGIN_USER_ERROR,
        payload: { msg: 'New error' }
      };
      const result = loginReducer(initialLoginState, setLoginUserErrorAction);
      expect(result).toEqual(expectedResult);
  });

  it(`should return state equal to initialState on ${types.REMOVE_LOGIN_USER_ERROR} action`,
    () => {
      const result = loginReducer(initialLoginState, { type: types.REMOVE_LOGIN_USER_ERROR });
      expect(result).toEqual(initialLoginState);
    });

  it(`should return state equal to initialState on ${types.LOGIN_USER_SUCCESS} action`,
    () => {
      const result = loginReducer(initialLoginState, { type: types.LOGIN_USER_SUCCESS });
      expect(result).toEqual(initialLoginState);
    });

  describe('getLoginState selector tests: ', () => {
    it('should return initialLoginState', () => {
      const state = {
        login: initialLoginState
      };
      const result = getLoginState(state);
      expect(result).toEqual(initialLoginState);
    });
  });

  describe('getError selector tests: ', () => {
    it('should be defined', () => {
      expect(getError).toBeDefined();
    });

    it('should return error state', () => {
      expect(getError(initialLoginState)).toEqual(null);
    });
  });

  describe('getPending selector tests: ', () => {
    it('should be defined', () => {
      expect(getPending).toBeDefined();
    });

    it('should return error state', () => {
      expect(getPending(initialLoginState)).toEqual(false);
    });
  });


});
