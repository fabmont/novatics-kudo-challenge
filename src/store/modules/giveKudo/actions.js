export const GIVE_BROOCHE = '@novatics_kudos/GIVE_BROOCHE';

export function giveBrooche(payload) {
  return {
    type: GIVE_BROOCHE,
    payload,
  };
}
