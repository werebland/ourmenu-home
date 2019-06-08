import React from 'react';
import Head from 'next/head'
import { withRouter } from 'next/router';
import styled from 'styled-components';
import {
  layout,
  space,
  color,
  typography,
  display,
  grid,
  flexbox,
  background,
  border,
  position,
} from 'styled-system'

import Nav from '../components/Nav'

const PageWrapper = styled.div`

`;

const PageHeader = styled.div(
  {
    boxSizing: 'border-box',
  },
  color,
  layout,
  space,
  display,
  flexbox,
);

const PageTitle = styled.h1(
  {},
  typography,
  color,
  space,
);

const PageContent = styled.div(
  {
    boxSizing: 'border-box',
  },
  space,
);

const PageSubtitle = styled.h3(
  {},
  typography,
  color,
  space,
);

const Contact = ({}) => (
  <PageWrapper>
    <Head>
      <title>
        Get in touch with us | OurMenu
      </title>
    </Head>
    <Nav inverted/>
    <PageHeader
      width="100vw"
      minHeight="50vh"
      bg="black"
      color="white"
      pt="128px"
      pl={['16px', '24px', '56px']}
      pr={['16px', '24px', '56px']}
      pb={['16px', '24px', '56px']}
      display="flex"
      alignItems="center"
    >
      <PageTitle
        fontSize="4.5rem"
        fontWeight="bold"
        lineHeight="5rem"
        color="white"
        m="0"
      >
        We'd love to meet you.
        <br/>
        And buy you a beer.
      </PageTitle>
    </PageHeader>
  </PageWrapper>
);

export default Contact;
