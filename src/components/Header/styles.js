import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Image } from 'grommet';

import { desktopWidth } from '../../constants/screenBreakpoints';

export const Container = styled.div``;

export const HeaderContent = styled.div`
  max-width: ${desktopWidth};
  margin: 0 auto;
  padding: 12px;
  display: flex;
  align-items: center;

  .nav-link-selected {
    color: steelblue;
  }

  @media (min-width: ${desktopWidth}) {
    padding: 12px 0;
  }
`;

export const Logo = styled(Image)`
  max-width: 110px;
`;

export const Divider = styled.div`
  width: 2px;
  height: 25px;
  margin: 0 12px;
  background-color: #ebebeb;
`;

export const Links = styled(NavLink).attrs({
  activeClassName: 'nav-link-selected',
})`
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
`;
