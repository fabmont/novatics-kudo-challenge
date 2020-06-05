import React from 'react';
import { Heading } from 'grommet';
import { FiGithub } from 'react-icons/fi';

import { Container, CardLogin, Logo, GithubButton } from './styles';
import NovaticsLogo from '../../assets/novatics-logo.png';
import { handleSignIn } from '.';

export default function Login() {
  return (
    <Container>
      <Logo src={NovaticsLogo} fit="contain" className="novatics-logo" />
      <CardLogin>
        <Heading className="card-title" size="small">
          Entrar
        </Heading>
        <span className="card-subtitle">Entre para começar a dar kudos!</span>
        <br />
        <GithubButton onClick={handleSignIn}>
          <FiGithub className="github-icon" size={20} />
          Entrar com Github
        </GithubButton>
      </CardLogin>
    </Container>
  );
}
