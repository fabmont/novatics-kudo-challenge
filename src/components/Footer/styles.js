import styled from 'styled-components';
import { transparentize } from 'polished';

import { desktopWidth } from '../../constants/screenBreakpoints';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${desktopWidth};
  padding: 50px 0;
`;

export const SlackContainer = styled.div`
  flex: 4;
`;

export const LinksContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.span`
  color: ${transparentize(0.65, 'black')};
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Link = styled.a`
  color: #424242;
  font-weight: bold;
  text-decoration: none;
`;

export const SocialRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CopyrightLabel = styled.span`
  color: ${transparentize(0.65, 'black')};
  margin-top: 12px;
`;

export const BackToTop = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #424242;
  color: white;
  border: 0;
  padding: 18px;
  width: 100%;
  font-family: 'Open Sans';
  cursor: pointer;

  .chevron-icon {
    margin-right: 12px;
  }
`;
