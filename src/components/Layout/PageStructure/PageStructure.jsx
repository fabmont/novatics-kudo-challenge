import React from 'react';
import PropTypes from 'prop-types';

import { Container, PageContainer, PageContent } from './styles';
import Header from '../../Header';
import Footer from '../../Footer';

export default function PageStructure({ children }) {
  return (
    <Container>
      <Header />
      <PageContainer>
        <PageContent>{children}</PageContent>
      </PageContainer>
      <Footer />
    </Container>
  );
}

PageStructure.propTypes = {
  children: PropTypes.node.isRequired,
};
