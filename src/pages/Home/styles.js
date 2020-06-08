import styled from 'styled-components';

import { mobileWidth, tabletWidth } from '../../constants/screenBreakpoints';

export const Container = styled.div`
  min-height: 100%;
  color: #424242;
`;

export const BrothersGrid = styled.div`
  display: grid;
  column-gap: 0;
  row-gap: 0;

  .brother-img {
    width: 100%;
  }

  @media (min-width: ${mobileWidth}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${tabletWidth}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: calc(${tabletWidth} + 1px)) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
