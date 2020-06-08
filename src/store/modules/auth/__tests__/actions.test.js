import { githubSignIn, emailSignIn } from '../actions';

describe('Redux Actions - Auth module', () => {
  test('should return the action for github signin', () => {
    const expectedReturn = {
      type: '@novatics-kudo/SIGN_IN_GITHUB',
    };
    expect(githubSignIn()).toEqual(expectedReturn);
  });

  test('should return the action for email signin', () => {
    const expectedPayload = {
      email: 'mail@mail.com',
      password: 'anything',
    };

    const expectedReturn = {
      type: '@novatics-kudo/SIGN_IN_EMAIL',
      payload: expectedPayload,
    };

    expect(emailSignIn(expectedPayload)).toEqual(expectedReturn);
  });
});
