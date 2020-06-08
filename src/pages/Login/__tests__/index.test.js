import { signInEmail, signInGithub } from '..';
import { auth } from '../../../services/firebase';

describe('Signin functions - Login', () => {
  test('should login with Github and dispatch it`s redux action', () => {
    const mockAuth = jest
      .spyOn(auth, 'signInWithPopup')
      .mockImplementation(() => ({
        additionalUserInfo: { isNewUser: false },
        user: { uid: 'userUidHere' },
      }));

    const mockDispatch = jest.fn();

    signInGithub()(mockDispatch);
    expect(mockAuth).toHaveBeenCalled();
  });

  test('should login with Github and dispatch it`s redux action', () => {
    const mockAuth = jest
      .spyOn(auth, 'signInWithEmailAndPassword')
      .mockImplementation(() => ({
        additionalUserInfo: { isNewUser: false },
        user: { uid: 'userUidHere' },
      }));

    const mockDispatch = jest.fn();

    const loginCredentials = { email: 'mail@mail.com', password: 'pw123' };
    signInEmail(loginCredentials)(mockDispatch);
    expect(mockAuth).toHaveBeenCalledWith(
      loginCredentials.email,
      loginCredentials.password
    );
  });
});
