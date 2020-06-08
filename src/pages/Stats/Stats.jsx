import React from 'react';
import { Heading, Box } from 'grommet';
import { PieChart } from 'react-minimal-pie-chart';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import { Container, Legend } from './styles';

export default function Stats() {
  const uid = useSelector(({ firebase: { auth } }) => auth.uid);
  const queryPath = `users/${uid}/receivedBrooches`;
  useFirestoreConnect(() => [{ collection: queryPath }]);
  const receivedBrooches = useSelector(
    ({ firestore: { ordered } }) => ordered[queryPath]
  );

  const learned = (receivedBrooches || []).filter(
    (item) => item.type === 'learned'
  ).length;
  const thankful = (receivedBrooches || []).filter(
    (item) => item.type === 'thankful'
  ).length;
  const grateful = (receivedBrooches || []).filter(
    (item) => item.type === 'grateful'
  ).length;

  const chartData = [
    { title: 'Aprendi', value: learned, color: 'cornflowerBlue' },
    { title: 'Foi top', value: thankful, color: 'yellow' },
    { title: 'Gratidão', value: grateful, color: 'deepPink' },
  ];

  return (
    <Container>
      <Heading>Meus kudos</Heading>
      <PieChart
        style={{ height: '300px' }}
        labelStyle={() => ({
          fontSize: '6px',
          fontFamily: 'Open Sans',
          fontWeight: 'bold',
        })}
        data={chartData}
        label={({ dataEntry }) => dataEntry.value}
      />
      <Box
        align="center"
        justify="center"
        direction="row"
        margin={{ top: '25px' }}
      >
        <Box
          align="center"
          justify="center"
          direction="row"
          margin={{ right: '40px' }}
        >
          <Legend color="yellow" /> #foitop
        </Box>
        <Box
          align="center"
          justify="center"
          direction="row"
          margin={{ right: '40px' }}
        >
          <Legend color="cornflowerBlue" /> #aprendi
        </Box>
        <Box align="center" justify="center" direction="row">
          <Legend color="deepPink" /> #gratidão
        </Box>
      </Box>
    </Container>
  );
}
