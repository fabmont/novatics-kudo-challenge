import { giveBrooche } from '../actions';

describe('Redux Actions - Give kudo module', () => {
  test('should return the action for giving a brooche', () => {
    const payload = {
      myUid: '1632hjshda',
      receiverUid: '9741ug34ug',
      type: 'grateful',
      availableBrooches: {},
    };
    const expectedReturn = {
      type: '@novatics_kudos/GIVE_BROOCHE',
      payload,
    };

    expect(giveBrooche(payload)).toEqual(expectedReturn);
  });
});
