import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Menu, Box } from 'grommet';
import { FiUser, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import loGet from 'lodash.get';

import { Container, HeaderContent, Logo, Divider, Links } from './styles';
import { auth } from '../../services/firebase';
import NovaticsLogo from '../../assets/novatics-logo.png';

export default function Header() {
  const authPayload = useSelector((store) => store.firebase.auth);

  return (
    <Container>
      <HeaderContent>
        <Box direction="row" align="center">
          <Link to="/">
            <Logo src={NovaticsLogo} />
          </Link>
          <Divider />
          <Links exact to="/">
            Dê um kudo
          </Links>
          <Links to="/timeline">Timeline</Links>
          <Links to="/my-kudos">Meus kudos</Links>
          <Menu
            className="menu-button"
            icon={false}
            label={<FiMenu />}
            items={[
              { label: 'Dê um kudo', onClick: () => {} },
              { label: 'Timeline', onClick: () => {} },
              { label: 'Meus kudos', onClick: () => {} },
            ]}
          />
        </Box>
        <Menu
          icon={false}
          label={
            <Box direction="row">
              <Avatar
                size="small"
                background="#ebebeb"
                src={loGet(authPayload, ['photoURL'])}
              >
                <FiUser size={14} />
              </Avatar>
              <span className="user-name">
                {loGet(authPayload, ['displayName'])}
              </span>
            </Box>
          }
          items={[{ label: 'Sair', onClick: async () => auth.signOut() }]}
        />
      </HeaderContent>
    </Container>
  );
}
