import React from 'react';

import { Container, HeaderContent, Logo, Divider, Links } from './styles';
import NovaticsLogo from '../../assets/novatics-logo.png';

export default function Header() {
  return (
    <Container>
      <HeaderContent>
        <Logo src={NovaticsLogo} />
        <Divider />
        <Links to="/">Dê um kudo</Links>
        <Links to="/timeline">Timeline</Links>
        <Links to="/my-kudos">Meus kudos</Links>
      </HeaderContent>
    </Container>
  );
}
