import React from 'react';
import { Heading } from 'grommet';

import { Container, BrothersGrid } from './styles';
import BrotherThumbnail from '../../components/BrotherThumbnail';
import AvailableBroochesBoard from '../../components/AvailableBroochesBoard';

export default function Home() {
  return (
    <Container>
      <Heading>Dê um kudo!</Heading>
      <AvailableBroochesBoard />
      <BrothersGrid>
        {[].map((brother) => (
          <BrotherThumbnail key={brother.name} {...brother} />
        ))}
      </BrothersGrid>
    </Container>
  );
}
