import { toast } from 'react-toastify';
import Login from './Login';
import { auth, githubSignInProvider } from '../../services/firebase';

export async function handleSignIn() {
  try {
    await auth.signInWithPopup(githubSignInProvider);
  } catch (error) {
    toast.error(
      'Ocorreu um erro ao fazer o login com Github. Tente mais tarde.'
    );
  }
}

export default Login;
