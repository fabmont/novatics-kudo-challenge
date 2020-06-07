import styled from 'styled-components';
import { Box } from 'grommet';
import { darken } from 'polished';

import { tabletWidth } from '../../constants/screenBreakpoints';

export const Container = styled(Box)`
  padding: 12px;
  border: 2px solid #ebebeb;
  border-radius: 6px;
  width: 100%;
  color: #424242;

  @media (min-width: ${tabletWidth}) {
    width: 450px;
  }
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const UpdatedTitle = styled.span`
  font-size: 14px;
  color: ${darken(0.1, '#ebebeb')};
`;

export const BroocheContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ bg }) => bg || 'white'};
  border: 2px solid ${({ bg }) => darken(0.05, bg) || 'white'};

  span {
    font-size: 30px;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const BroocheCounter = styled(Box)`
  position: absolute;
  bottom: -14px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
