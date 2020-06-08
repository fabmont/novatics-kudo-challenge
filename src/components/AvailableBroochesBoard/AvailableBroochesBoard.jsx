import React from 'react';
import { Box } from 'grommet';
import moment from 'moment';
import PropTypes from 'prop-types';

import {
  Container,
  Title,
  UpdatedTitle,
  BroocheContainer,
  BroocheCounter,
} from './styles';

export default function AvailableBroochesBoard({
  learned,
  thankful,
  grateful,
  lastChange,
}) {
  const updatedAt = lastChange
    ? moment(lastChange).format('DD/MM/YYYY')
    : '--/--/--';

  return (
    <Container>
      <Box direction="row" align="center" justify="between">
        <Title>Selos Disponíveis</Title>
        <UpdatedTitle>Atualizado em {updatedAt}</UpdatedTitle>
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
          <BroocheCounter>{learned}</BroocheCounter>
        </BroocheContainer>
        <BroocheContainer bg="yellow">
          <span role="img" aria-label="thankful">
            👏
          </span>
          <BroocheCounter>{thankful}</BroocheCounter>
        </BroocheContainer>
        <BroocheContainer bg="deepPink">
          <span role="img" aria-label="grateful">
            🙏
          </span>
          <BroocheCounter>{grateful}</BroocheCounter>
        </BroocheContainer>
      </Box>
    </Container>
  );
}

AvailableBroochesBoard.propTypes = {
  learned: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  thankful: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  grateful: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lastChange: PropTypes.string,
};

AvailableBroochesBoard.defaultProps = {
  learned: '-',
  thankful: '-',
  grateful: '-',
  lastChange: PropTypes.string,
};
