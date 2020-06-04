import React from 'react';
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
  FaChevronUp,
} from 'react-icons/fa';

import {
  Container,
  SlackContainer,
  LinksContainer,
  SectionTitle,
  Link,
  SocialRow,
  CopyrightLabel,
  BackToTop,
} from './styles';

export default function Footer() {
  return (
    <div>
      <Container>
        <SlackContainer>hei</SlackContainer>
        <LinksContainer>
          <SectionTitle>Links rápidos</SectionTitle>
          <Link href="/">Sobre nós</Link>
          <Link href="/">Nosso blog</Link>
          <Link href="/">FAQ</Link>
        </LinksContainer>
        <LinksContainer>
          <SectionTitle>Nossos canais</SectionTitle>
          <SocialRow>
            <Link href="/">
              <FaFacebookSquare size={30} />
            </Link>
            <Link href="/">
              <FaLinkedin size={30} />
            </Link>
            <Link href="/">
              <FaTwitter size={30} />
            </Link>
            <Link href="/">
              <FaInstagramSquare size={30} />
            </Link>
          </SocialRow>
          <CopyrightLabel>Novatics © 2020</CopyrightLabel>
        </LinksContainer>
      </Container>
      <BackToTop>
        <FaChevronUp className="chevron-icon" />
        voltar ao topo
      </BackToTop>
    </div>
  );
}
