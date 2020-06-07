import React from 'react';
import { Box } from 'grommet';

import {
  Container,
  Title,
  UpdatedTitle,
  BroocheContainer,
  BroocheCounter,
} from './styles';

export default function AvailableBroochesBoard() {
  return (
    <Container>
      <Box direction="row" align="center" justify="between">
        <Title>Selos Disponíveis</Title>
        <UpdatedTitle>Atualizado em 06/06/2020</UpdatedTitle>
      </Box>
      <Box
        direction="row"
        align="center"
        margin={{ top: '20px', bottom: '12px' }}
      >
        <BroocheContainer bg="cornflowerBlue">
          <span role="img" aria-label="learned">
            👨‍🎓
          </span>
          <BroocheCounter>2</BroocheCounter>
        </BroocheContainer>
        <BroocheContainer bg="yellow">
          <span role="img" aria-label="thankful">
            👏
          </span>
          <BroocheCounter>2</BroocheCounter>
        </BroocheContainer>
        <BroocheContainer bg="deepPink">
          <span role="img" aria-label="grateful">
            🙏
          </span>
          <BroocheCounter>2</BroocheCounter>
        </BroocheContainer>
      </Box>
    </Container>
  );
}
