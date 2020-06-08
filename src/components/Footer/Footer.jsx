import React from 'react';
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
} from 'react-icons/fa';
import { FiChevronUp } from 'react-icons/fi';
import { Box, Image } from 'grommet';

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
import SlackLogo from '../../assets/slack-logo.png';

export default function Footer() {
  return (
    <div>
      <Container>
        <SlackContainer>
          <Box direction="row">
            <Image src={SlackLogo} className="slack-logo" />
            <Box>
              <b>Reconheça seu colega pelo Slack!</b>
              Mande um kudo pelo nosso canal #paredãodobem
            </Box>
          </Box>
          <Box className="kudo-sample-box">
            <p>
              /kudo{' '}
              <span className="marked-hashtag">#dokudo @nomedocolega</span>{' '}
              Seguido de um comentário!
            </p>
          </Box>
          <Box direction="row" className="reactions-row">
            <div>
              <span role="img" aria-label="clap">
                👏
              </span>
              &nbsp;&nbsp; #foitop
            </div>
            <div>
              <span role="img" aria-label="thankful">
                🙏
              </span>
              &nbsp;&nbsp; #gratidao
            </div>
            <div>
              <span role="img" aria-label="learned">
                👨‍🎓
              </span>
              &nbsp;&nbsp; #aprendi
            </div>
          </Box>
        </SlackContainer>
        <LinksContainer>
          <SectionTitle>Links rápidos</SectionTitle>
          <Link
            rel="noo-opener"
            target="_blank"
            href="https://www.novatics.com.br/#top"
          >
            Sobre nós
          </Link>
          <Link
            rel="noo-opener"
            target="_blank"
            href="https://blog.novatics.com.br/"
          >
            Nosso blog
          </Link>
          <Link rel="noo-opener" target="_blank" href="/">
            FAQ
          </Link>
        </LinksContainer>
        <LinksContainer>
          <SectionTitle>Nossos canais</SectionTitle>
          <SocialRow>
            <Link
              rel="noo-opener"
              target="_blank"
              href="http://www.facebook.com/novatics"
            >
              <FaFacebookSquare size={30} />
            </Link>
            <Link
              rel="noo-opener"
              target="_blank"
              href="https://www.linkedin.com/company/9283206"
            >
              <FaLinkedin size={30} />
            </Link>
            <Link
              rel="noo-opener"
              target="_blank"
              href="http://www.twitter.com/novatics"
            >
              <FaTwitter size={30} />
            </Link>
            <Link
              rel="noo-opener"
              target="_blank"
              href="https://www.instagram.com/novatics_"
            >
              <FaInstagramSquare size={30} />
            </Link>
          </SocialRow>
          <CopyrightLabel>Novatics © 2020</CopyrightLabel>
        </LinksContainer>
      </Container>
      <BackToTop onClick={() => window.scrollTo(0, 0)}>
        <FiChevronUp className="chevron-icon" />
        voltar ao topo
      </BackToTop>
    </div>
  );
}
