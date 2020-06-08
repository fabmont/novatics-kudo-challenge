import styled from 'styled-components';
import { Box } from 'grommet';
import { darken } from 'polished';

export const Container = styled(Box)`
  color: #424242;
`;

export const Legend = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${({ color }) => color || 'black'};
  border: 2px solid ${({ color }) => darken(0.07, color) || 'black'};
  border-radius: 50%;
  margin-right: 8px;
`;
