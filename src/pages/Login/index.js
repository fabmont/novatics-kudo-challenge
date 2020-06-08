import { toast } from 'react-toastify';
import moment from 'moment';
import loGet from 'lodash.get';

import Login from './Login';
import { auth, githubSignInProvider, firestore } from '../../services/firebase';
import { githubSignIn, emailSignIn } from '../../store/modules/auth/actions';

const userInfoPayload = (userData) => ({
  availableBrooches: {
    grateful: 2,
    learned: 2,
    thankful: 2,
    lastChange: moment().format('YYYY-MM-DD'),
  },
  displayName: loGet(userData, ['user', 'displayName']),
  email: loGet(userData, ['user', 'email']),
  photoURL: loGet(userData, ['user', 'photoURL']),
  receivedBrooches: [],
  uid: loGet(userData, ['user', 'uid']),
});

export function signInGithub() {
  return async (dispatch) => {
    try {
      const result = await auth.signInWithPopup(githubSignInProvider);

      const isNewUser = loGet(result, ['additionalUserInfo', 'isNewUser']);
      const userUid = loGet(result, ['user', 'uid']);

      if (isNewUser) {
        await firestore
          .collection('users')
          .doc(userUid)
          .set(userInfoPayload(result));
      }
    } catch (error) {
      toast.error('Ocorreu um erro ao fazer login.');
    }

    dispatch(githubSignIn());
  };
}

export function signInEmail({ email, password }) {
  return async (dispatch) => {
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);

      const isNewUser = loGet(result, ['additionalUserInfo', 'isNewUser']);
      const userUid = loGet(result, ['user', 'uid']);

      if (isNewUser) {
        await firestore
          .collection('users')
          .doc(userUid)
          .set(userInfoPayload(result));
      }
    } catch (error) {
      toast.error('Ocorreu um erro ao fazer login.');
    }

    dispatch(emailSignIn());
  };
}

export default Login;
