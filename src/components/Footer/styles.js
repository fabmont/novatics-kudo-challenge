import styled from 'styled-components';
import { transparentize } from 'polished';

import {
  desktopWidth,
  mobileWidth,
  tabletWidth,
} from '../../constants/screenBreakpoints';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${desktopWidth};
  padding: 50px 0;

  @media (max-width: ${mobileWidth}) {
    flex-direction: column;
  }
`;

export const SlackContainer = styled.div`
  flex: 4;
  color: #424242;
  margin: 0 12px 20px 12px;

  .slack-logo {
    height: 30px;
    margin-right: 12px;
  }

  .kudo-sample-box {
    background-color: #E8E8E9;
    padding: 6px;
    margin-top: 12px;
    border-radius: 6px;
    display: inline-block;

    p {
      margin: 0;
    }

    .marked-hashtag {
      color: blue;
    }
  }

  .reactions-row div {
    font-size: 12px;
    margin-top: 12px;
    color: gray;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  @media (max-width: ${tabletWidth}) {
    flex: 2;
  }

  @media (min-width: calc(${desktopWidth} + 1px)) {
    margin: 0;
  }
`;

export const LinksContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 12px 20px 12px;

  &:last-child {
    margin-right: 12px;
  }

  @media (min-width: calc(${desktopWidth} + 1px)) {
    &:last-child {
      margin-right: 0;
    }
  }
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

  @media (max-width: ${mobileWidth}) {
    width: 50%;
  }
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
