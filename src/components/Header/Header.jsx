import React, { useContext } from 'react';
import { Avatar, Menu, Box } from 'grommet';
import { FiUser, FiMenu } from 'react-icons/fi';
import loGet from 'lodash.get';

import { Container, HeaderContent, Logo, Divider, Links } from './styles';
import NovaticsLogo from '../../assets/novatics-logo.png';
import { UserContext } from '../../contexts/userContext';

export default function Header() {
  const { logout, userData } = useContext(UserContext);

  return (
    <Container>
      <HeaderContent>
        <Box direction="row" align="center">
          <Logo src={NovaticsLogo} />
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
                src={loGet(userData, ['photoURL'])}
              >
                <FiUser size={14} />
              </Avatar>
              <span className="user-name">
                {loGet(userData, ['displayName'])}
              </span>
            </Box>
          }
          items={[{ label: 'Logout', onClick: logout }]}
        />
      </HeaderContent>
    </Container>
  );
}
