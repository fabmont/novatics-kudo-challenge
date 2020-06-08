import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Image } from 'grommet';

import { desktopWidth, tabletWidth } from '../../constants/screenBreakpoints';

export const Container = styled.div``;

export const HeaderContent = styled.div`
  max-width: ${desktopWidth};
  margin: 0 auto;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-link-selected {
    border-bottom: 2px solid #424242;
  }

  .user-name {
    font-weight: bold;
    color: #424242;
    margin-left: 12px;
  }

  .menu-button {
    display: none;

    @media (max-width: ${tabletWidth}) {
      display: inherit;
    }
  }

  @media (min-width: ${desktopWidth}) {
    padding: 12px 0;
  }
`;

export const Logo = styled(Image)`
  max-height: 30px;
`;

export const Divider = styled.div`
  width: 2px;
  height: 25px;
  margin: 0 20px;
  background-color: #ebebeb;
`;

export const Links = styled(NavLink).attrs({
  activeClassName: 'nav-link-selected',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
  color: #424242;
  transition: color 0.3s ease-out;

  &:hover {
    color: steelblue;
    transition: color 0.3s ease-in;
  }

  &:not(:last-child) {
    margin-right: 30px;
  }

  @media (max-width: ${tabletWidth}) {
    display: none;
  }
`;
