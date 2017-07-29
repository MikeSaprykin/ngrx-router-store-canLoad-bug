import * as actions from './login.actions';
import * as types from './login.types';

describe('Login Actions tests: ', () => {

  describe('loginUser action tests', () => {
    it('should be defined', () => {
      expect(actions.loginUser).toBeDefined();
    });

    it('should return expectedResult', () => {
      const mockPayload = { username: 'username', password: 'password ' };
      const expectedResult = {
        type: types.LOGIN_USER,
        payload: mockPayload
      };
      const result = actions.loginUser(mockPayload);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('setLoginUserError action tests', () => {
    it('should be defined', () => {
      expect(actions.setLoginUserError).toBeDefined();
    });

    it('should return expectedResult', () => {
      const mockPayload = { msg: 'username is required' };
      const expectedResult = {
        type: types.SET_LOGIN_USER_ERROR,
        payload: mockPayload
      };
      const result = actions.setLoginUserError(mockPayload);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('removeLoginUserError action tests', () => {
    it('should be defined', () => {
      expect(actions.removeLoginUserError).toBeDefined();
    });

    it('should return removeLoginUserError', () => {
      const expectedResult = {
        type: types.REMOVE_LOGIN_USER_ERROR,
      };
      const result = actions.removeLoginUserError();
      expect(result).toEqual(expectedResult);
    });
  });

  describe('loginUserSuccess action tests', () => {
    it('should be defined', () => {
      expect(actions.loginUserSuccess).toBeDefined();
    });

    it('should return removeLoginUserError', () => {
      const mockPayload = { token: 'test_token' };
      const expectedResult = {
        type: types.LOGIN_USER_SUCCESS,
        payload: mockPayload
      };
      const result = actions.loginUserSuccess(mockPayload);
      expect(result).toEqual(expectedResult);
    });
  });

});
