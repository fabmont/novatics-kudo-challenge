import React from 'react';
import { Heading } from 'grommet';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import loGet from 'lodash.get';

import { Container, BrothersGrid } from './styles';
import BrotherThumbnail from '../../components/BrotherThumbnail';
import AvailableBroochesBoard from '../../components/AvailableBroochesBoard';

export default function Home() {
  useFirestoreConnect(() => [{ collection: 'users' }]);
  const { availableBrooches, uid } = useSelector(
    ({ firebase }) => firebase.profile
  );
  const userList = useSelector(({ firestore: { ordered } }) => ordered.users);
  const filteredUsers = (userList || []).filter((user) => user.id !== uid);

  return (
    <Container>
      <Heading>Dê um kudo!</Heading>
      <AvailableBroochesBoard
        learned={loGet(availableBrooches, ['learned'], '-')}
        thankful={loGet(availableBrooches, ['thankful'], '-')}
        grateful={loGet(availableBrooches, ['grateful'], '-')}
        lastChange={loGet(availableBrooches, ['lastChange'], '')}
      />
      <BrothersGrid>
        {filteredUsers.map((brother) => (
          <BrotherThumbnail key={brother.id} {...brother} />
        ))}
      </BrothersGrid>
    </Container>
  );
}
