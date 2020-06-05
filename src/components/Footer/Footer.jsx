import React from 'react';
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
} from 'react-icons/fa';
import { FiChevronUp } from 'react-icons/fi';

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
        <SlackContainer>Slack component here</SlackContainer>
        <LinksContainer>
          <SectionTitle>Links rápidos</SectionTitle>
          <Link href="https://www.novatics.com.br/#top">Sobre nós</Link>
          <Link href="https://blog.novatics.com.br/">Nosso blog</Link>
          <Link href="/">FAQ</Link>
        </LinksContainer>
        <LinksContainer>
          <SectionTitle>Nossos canais</SectionTitle>
          <SocialRow>
            <Link href="http://www.facebook.com/novatics">
              <FaFacebookSquare size={30} />
            </Link>
            <Link href="https://www.linkedin.com/company/9283206">
              <FaLinkedin size={30} />
            </Link>
            <Link href="http://www.twitter.com/novatics">
              <FaTwitter size={30} />
            </Link>
            <Link href="https://www.instagram.com/novatics_">
              <FaInstagramSquare size={30} />
            </Link>
          </SocialRow>
          <CopyrightLabel>Novatics © 2020</CopyrightLabel>
        </LinksContainer>
      </Container>
      <BackToTop>
        <FiChevronUp className="chevron-icon" />
        voltar ao topo
      </BackToTop>
    </div>
  );
}
