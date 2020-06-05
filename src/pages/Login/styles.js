import styled from 'styled-components';
import { Image } from 'grommet';
import { transparentize } from 'polished';

import { mobileWidth } from '../../constants/screenBreakpoints';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #424242;
`;

export const CardLogin = styled.div`
  padding: 18px;
  border: 2px solid #ebebeb;
  border-radius: 6px;
  width: 500px;

  .card-title {
    margin: 0 0 8px 0;
  }

  .card-subtitle {
    color: ${transparentize(0.7, '#424242')};
  }

  @media (max-width: ${mobileWidth}) {
    width: 100%;
    margin: 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Logo = styled(Image)`
  position: absolute;
  left: 12px;
  top: 12px;
  max-width: 110px;
`;

export const GithubButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 12px;
  background-color: black;
  transition: background-color 0.3s ease-in-out;
  color: white;
  font-weight: bold;
  font-size: 14px;
  border-radius: 4px;
  margin-top: 30px;
  width: 100%;
  cursor: pointer;

  &:hover {
    transition: background-color 0.3s ease-in;
    background-color: ${transparentize(0.25, 'black')};
  }

  .github-icon {
    margin-right: 12px;
  }
`;
