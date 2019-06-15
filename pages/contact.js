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
import Footer from '../components/Footer'

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

const ContactOptions = styled.ul(
  {
    listStyle: 'none'
  },
  space,
  display,
  flexbox,
);

const ContactOption = styled.li(
  {},
  display,
  flexbox,
  space,
);

const OptionTitle = styled.h3(
  {
    '&::after': {
      content: JSON.stringify(""),
      position: 'absolute',
      right: -4,
      bottom: 0,
      width: '95%',
      height: '16px',
      background: '#1BE7FF',
      display: 'block',
      zIndex: '-1'
    }
  },
  typography,
  space,
  color,
    position,
    display,
);

const OptionAction = styled.a(
  {
    textDecoration: 'none'
  },
  typography,
  space,
  color,
  border,
);

const Contact = ({}) => (
  <PageWrapper>
    <Head>
      <title>
        Get in touch with us | OurMenu
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
      <link rel="manifest" href="/static/site.webmanifest"/>
      <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#000"/>
      <link rel="shortcut icon" href="/static/favicon.ico"/>
      <meta name="msapplication-TileColor" content="#000000"/>
      <meta name="msapplication-config" content="/static/browserconfig.xml"/>
      <meta name="theme-color" content="#000"/>
    </Head>
    <Nav inverted/>
    <PageHeader
      width="100vw"
      minHeight="50vh"
      bg="black"
      color="white"
      pt="196px"
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
    <PageContent
      p={['16px', '24px', '56px']}
    >
      <PageSubtitle
        fontSize="1.5rem"
        fontWeight="bold"
        color="black"
        m="0"
        mb="16px"
      >
        Halifax is our home and helping local businesses is our passion. Call us, beep us, or email us and we would be happy to introduce you to OurMenu over a beer (or coffee) at your favorite spot.
      </PageSubtitle>
      <ContactOptions
        display="grid"
        gridTemplateColumns="auto"
        gridGap="24px"
        p="0"
        m="0"
      >
        <ContactOption
          display="inline-flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          <OptionTitle
            fontSize="3rem"
            fontWeight="bold"
            color="black"
            position="relative"
            display="inline-flex"
            mb="16px"
          >
            Call
          </OptionTitle>
          <OptionAction
            fontSize="2rem"
            fontWeight="bold"
            color="black"
            href="tel:+19022223062"
            borderBottom="4px solid"
            borderColor="black"
            >
            +1 (902) 222-3062
          </OptionAction>
        </ContactOption>
        <ContactOption
          display="inline-flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          <OptionTitle
            fontSize="3rem"
            fontWeight="bold"
            color="black"
            position="relative"
            display="inline-flex"
            mb="16px"
          >
            Email
          </OptionTitle>
          <OptionAction
            fontSize="2rem"
            fontWeight="bold"
            color="black"
            href="mailto:hello@ourmenu.co"
            borderBottom="4px solid"
            borderColor="black"
            >
            hello@ourmenu.co
          </OptionAction>
        </ContactOption>
      </ContactOptions>
    </PageContent>
    <Footer />
  </PageWrapper>
);

export default Contact;
