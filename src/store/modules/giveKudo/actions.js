export const GET_USER_LIST = '@novatics_kudos/GET_USER_LIST';
export const GIVE_BROOCHE = '@novatics_kudos/GIVE_BROOCHE';

export function giveBrooche(payload) {
  return {
    type: GIVE_BROOCHE,
    payload,
  };
}
