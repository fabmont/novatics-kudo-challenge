import React, { useState } from 'react';
import { Heading, TextInput } from 'grommet';
import { FiGithub } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import {
  Container,
  CardLogin,
  Logo,
  GithubButton,
  LoginButton,
  Divider,
} from './styles';
import NovaticsLogo from '../../assets/novatics-logo.png';
import { signInGithub, signInEmail } from '.';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Container>
      <Logo src={NovaticsLogo} fit="contain" className="novatics-logo" />
      <CardLogin>
        <Heading className="card-title" size="small">
          Entrar
        </Heading>
        <div className="card-subtitle">Entre para começar a dar kudos!</div>
        <TextInput
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextInput
          placeholder="Senha"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton onClick={() => dispatch(signInEmail({ email, password }))}>
          Entrar
        </LoginButton>
        <Divider />
        <GithubButton onClick={() => dispatch(signInGithub())}>
          <FiGithub className="github-icon" size={20} />
          Entrar com Github
        </GithubButton>
      </CardLogin>
    </Container>
  );
}
