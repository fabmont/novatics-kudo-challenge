export const SIGN_IN_GITHUB = '@novatics-kudo/SIGN_IN_GITHUB';
export const SIGN_IN_EMAIL = '@novatics-kudo/SIGN_IN_EMAIL';

export function githubSignIn() {
  return {
    type: SIGN_IN_GITHUB,
  };
}

export function emailSignIn(payload) {
  return {
    type: SIGN_IN_EMAIL,
    payload,
  };
}
