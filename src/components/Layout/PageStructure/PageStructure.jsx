import React from 'react';

import { Container, PageContainer, PageContent } from './styles';
import Header from '../../Header';
import Footer from '../../Footer';

export default function PageStructure() {
  return (
    <Container>
      <Header />
      <PageContainer>
        <PageContent>Hello</PageContent>
      </PageContainer>
      <Footer />
    </Container>
  );
}
