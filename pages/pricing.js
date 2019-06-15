import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import {
  color,
  space,
  layout,
  display,
  flexbox,
  typography,
  grid,
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

const PricingGrid = styled.section(
  {},
  display,
  space,
  grid,
);

const PricingCard = styled.article(
  {},
  border,
  display,
  flexbox,
);

const PricingCardHeader = styled.div(
  {
    boxSizing: 'border-box',
  },
  layout,
  space,
  color,
  display,
  flexbox,
  border,
  position,
);

const PricingCardLabel = styled.span(
  {},
  position,
  border,
  display,
  color,
  typography,
  space,
);

const PricingCardTitle = styled.h5(
  {},
  typography,
  space,
  color,
);

const PricingCardIcon = styled.div(
  {},
  display,
  flexbox,
  layout,
);

const PricingCardPrice = styled.span(
  {},
  typography,
  space,
  color,
);

const PricingCardCaption = styled.span(
  {},
  typography,
  space,
  color,
);

const PricingCardContent = styled.div(
  {},
  display,
  flexbox,
  space,
);

const PricingCardList = styled.ul(
  {
    boxSizing: 'border-box'
  },
  space,
  display,
  border,
  flexbox,
);

const PricingCardListItem = styled.li(
  {
    listStyle: 'none',
    '& svg': {
      marginRight: '8px',
      minWidth: '24px'
    }
  },
  display,
  space,
  border,
  typography,
  color,
);

const PricingCardButton = styled.a(
  {
    textDecoration: 'none',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

    ':hover': {
      backgroundColor: '#fff',
      color: '#1a1a1a',
    }
  },
  display,
  flexbox,
  space,
  border,
  color,
  layout,
  typography,
);

const PricingBlack = styled.div(
  {
    boxSizing: 'border-box',
  },
  display,
  flexbox,
  grid,
  border,
  color,
  space,
  typography,
);

const PricingBlackCallout = styled.div(
  {},
);

const PricingBlackContent = styled.div(
  {},
);

const Pricing = ({}) => (
    <PageWrapper>
      <Head>
        <title>
          Fair and simple pricing for all | OurMenu
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
          Try all of OurMenu for free now.
          <br/>
          Pick a plan later.
        </PageTitle>
      </PageHeader>
      <PageContent
        pl={['16px', '24px', '56px']}
        pr={['16px', '24px', '56px']}
        pt={['32px', '32px', '56px']}
        pb={['32px', '32px', '56px']}
      >
        <PageSubtitle
          fontSize="2rem"
          fontWeight="bold"
          lineHeight="2rem"
          color="black"
          m="0"
          mb={['32px', '32px', '56px']}
        >
          Fair and simple pricing for all.
        </PageSubtitle>
        <PricingGrid
          width="100%"
          maxWidth="880px"
          display="grid"
          m="auto"
          mb="24px"
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr"]}
          gridGap="24px"
        >
          <PricingCard
            bg="white"
            border="2px solid"
            borderColor="black"
            borderRadius="8px"
            display="flex"
            flexDirection="column"
          >
            <PricingCardHeader
              display="flex"
              bg="white"
              p="56px 24px 24px"
              justifyContent="space-between"
              alignItems="center"
              flexDirection="column"
              borderRadius="6px 6px 0 0"
              borderBottom="2px solid"
              borderColor="black"
              position="relative"
            >

              <PricingCardTitle
                fontSize="3rem"
                fontWeight="bold"
                lineHeight="3rem"
                color="black"
                m="0"
              >
                Free
              </PricingCardTitle>
              <PricingCardIcon
                width="200px"
                height="200px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <svg
                  version="1.1"
                  fill="#000e1a"
                  x="0px"
                  y="0px"
                  width="120px"
                  height="197.2px"
                  viewBox="0 0 160 197.2"
                >
                <g>
                	<path d="M155.8,19.9C137.8,6.7,112.3,0,79.9,0C47.9,0,22.5,6.7,4.3,19.9c-4,2.9-5.4,8-3.4,12.4l0,0l70.9,159.4
                		c1.5,3.4,4.7,5.5,8.5,5.5c0,0,0,0,0,0c3.7,0,7-2.1,8.5-5.5l70.4-159.2C161.1,28,159.7,22.9,155.8,19.9z M31,87.8
                		c2.5-0.8,5.2-0.8,7.7,0.2c3,1.1,5.3,3.3,6.6,6.2c2.5,5.5,0.3,11.9-4.8,15L31,87.8z M84.2,189.6c-0.7,1.6-2.2,2.6-4,2.6c0,0,0,0,0,0
                		c-1.8,0-3.2-1-4-2.6l-33.7-75.9c7.6-4.2,10.8-13.5,7.2-21.6c-1.8-4.1-5.2-7.2-9.3-8.8c-3.7-1.4-7.7-1.5-11.5-0.2L15,51.9
                		c3.1-2.2,8.9-6.2,18.7-9.8c-2.2,3-3.5,6.8-3.5,10.8c0,10.2,8.3,18.5,18.5,18.5s18.5-8.3,18.5-18.5c0-7.1-4-13.3-9.9-16.4
                		c6.5-0.9,14-1.4,22.4-1.4c3.1,0,6.1,0.1,9,0.2c-6.9,4-11.5,11.4-11.5,19.9c0,12.7,10.4,23.1,23.1,23.1s23.1-10.4,23.1-23.1
                		c0-6.2-2.5-11.8-6.4-15.9c10.9,2.8,20.2,7,27.9,12.6l-17.9,40.4c-2.4-5.9-8.2-10-14.9-10c-8.9,0-16.1,7.2-16.1,16.1
                		s7.2,16.1,16.1,16.1c1.9,0,3.8-0.4,5.5-1L98,158.3c-3.2-1.1-6.6-1.1-9.7,0.2c-3.5,1.4-6.2,4-7.7,7.4c-1.5,3.4-1.5,7.2-0.2,10.7
                		c1.2,3.1,3.5,5.5,6.4,7.1L84.2,189.6z M48.8,39.3c7.5,0,13.6,6.1,13.6,13.6s-6.1,13.6-13.6,13.6s-13.6-6.1-13.6-13.6
                		S41.2,39.3,48.8,39.3z M118.6,55.3c0,10-8.2,18.2-18.2,18.2s-18.2-8.2-18.2-18.2s8.2-18.2,18.2-18.2S118.6,45.3,118.6,55.3z
                		 M112.3,109.5c-6.1,0-11.1-5-11.1-11.1s5-11.1,11.1-11.1c6.1,0,11.1,5,11.1,11.1C123.5,104.5,118.5,109.5,112.3,109.5z M88.8,179.2
                		c-1.7-1-3-2.5-3.8-4.4c-0.9-2.2-0.9-4.7,0.1-6.9c1-2.2,2.7-3.9,5-4.8c1.9-0.8,4-0.8,5.9-0.2L88.8,179.2z M154.6,30.3l-7.5,17
                		C130.9,36,108.3,30.2,79.8,30.2c-28.4,0-50.3,5.6-66.8,17.1L5.4,30.3l0,0c-1-2.3-0.3-4.8,1.8-6.4c17.3-12.6,41.8-19,72.7-19
                		c30.9,0,56.1,6.6,73,19C154.9,25.4,155.6,28,154.6,30.3z"/>
                	<path d="M95.2,134.2c0-9.1-7.4-16.4-16.4-16.4c-9.1,0-16.4,7.4-16.4,16.4s7.4,16.4,16.4,16.4C87.9,150.7,95.2,143.3,95.2,134.2z
                		 M78.8,145.7c-6.3,0-11.5-5.2-11.5-11.5c0-6.3,5.2-11.5,11.5-11.5c6.3,0,11.5,5.2,11.5,11.5C90.3,140.6,85.1,145.7,78.8,145.7z"/>
                	<path d="M87.8,92.6c0-8.3-6.8-15.1-15.1-15.1c-8.3,0-15.1,6.8-15.1,15.1s6.8,15.1,15.1,15.1C81,107.7,87.8,101,87.8,92.6z
                		 M62.5,92.6c0-5.6,4.6-10.2,10.2-10.2c5.6,0,10.2,4.6,10.2,10.2c0,5.6-4.6,10.2-10.2,10.2C67.1,102.8,62.5,98.3,62.5,92.6z"/>
                	<path d="M144,189c0.6,0,1.3-0.2,1.7-0.7c1-1,1-2.5,0-3.5l-22.9-22.9c-1-1-2.5-1-3.5,0s-1,2.5,0,3.5l22.9,22.9
                		C142.7,188.8,143.4,189,144,189z"/>
                	<path d="M113.1,175.9c-1.3,0.4-2.1,1.7-1.7,3.1l4.7,16.3c0.3,1.1,1.3,1.8,2.4,1.8c0.2,0,0.5,0,0.7-0.1c1.3-0.4,2.1-1.7,1.7-3.1
                		l-4.7-16.3C115.8,176.3,114.4,175.6,113.1,175.9z"/>
                	<path d="M41.4,162.1c-1-1-2.5-1-3.5,0l-22.6,22.6c-1,1-1,2.5,0,3.5c0.5,0.5,1.1,0.7,1.7,0.7c0.6,0,1.3-0.2,1.7-0.7l22.6-22.6
                		C42.3,164.6,42.3,163,41.4,162.1z"/>
                	<path d="M41.5,197.1c0.2,0.1,0.5,0.1,0.7,0.1c1.1,0,2.1-0.7,2.4-1.8l4.7-16.3c0.4-1.3-0.4-2.7-1.7-3.1c-1.3-0.4-2.7,0.4-3.1,1.7
                		L39.8,194C39.5,195.3,40.2,196.7,41.5,197.1z"/>
                </g>
                </svg>
 
              </PricingCardIcon>
              <PricingCardPrice
                fontSize="3rem"
                fontWeight="bold"
                color="black"
              >
                $0
                <PricingCardCaption
                  fontSize="1.5rem"
                >
                /month
                </PricingCardCaption>
              </PricingCardPrice>
            </PricingCardHeader>
            <PricingCardContent
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              flex="1"
              p="8px 24px 24px"
            >
            <PricingCardList
              p="0"
              m="0"
            >
              <PricingCardListItem
                p="16px 0"
                display="flex"
                fontSize="1.25rem"
                fontWeight="regular"
                color="black"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Embedable OurMenu widget
              </PricingCardListItem>
              <PricingCardListItem
                p="16px 0"
                display="flex"
                fontSize="1.25rem"
                fontWeight="regular"
                color="black"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Unlimited items and menus
              </PricingCardListItem>
              <PricingCardListItem
                p="16px 0"
                display="flex"
                fontSize="1.25rem"
                fontWeight="regular"
                color="black"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Menu updated when crawled
              </PricingCardListItem>
              <PricingCardListItem
                p="16px 0"
                display="flex"
                fontSize="1.25rem"
                fontWeight="regular"
                color="black"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Basic social integration
              </PricingCardListItem>
            </PricingCardList>
            <Link
              href={{ pathname: '/request-demo', query: { plan: 'free' }}}
            >
              <PricingCardButton
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                border="2px solid"
                borderColor="black"
                borderRadius="8px"
                bg="black"
                p="16px 14px"
                fontSize="1.25rem"
                fontWeight="bold"
                color="white"
              >
                Request your demo
              </PricingCardButton>
            </Link>
            </PricingCardContent>
          </PricingCard>
          <PricingCard
            bg="white"
            border="2px solid"
            borderColor="black"
            borderRadius="8px"
          >
            <PricingCardHeader
              display="flex"
              bg="blue"
              p="56px 24px 24px"
              justifyContent="space-between"
              alignItems="center"
              flexDirection="column"
              borderRadius="6px 6px 0 0"
              borderBottom="2px solid"
              borderColor="black"
              position="relative"
            >
              <PricingCardTitle
                fontSize="3rem"
                fontWeight="bold"
                lineHeight="3rem"
                color="black"
                m="0"
              >
                Deluxe
              </PricingCardTitle>
              <PricingCardIcon
                width="200px"
                height="200px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <svg version="1.1"
                  fill="#000e1a"
                	 x="0px"
                   y="0px"
                   width="160px"
                   height="160px"
                   viewBox="0 0 200.3 200">
                <path className="st0" d="M179.3,130.8c5.8-7.4,8.7-17.8,8.7-30.9c0-13-2.9-23.3-8.7-30.8c-0.4-0.5-0.9-1-1.5-1.3
                	c0.1-0.6,0.2-1.2,0.1-1.9c-1.1-9.3-6.4-18.8-15.7-28.1c-9.2-9.2-18.6-14.4-28-15.6c-0.7-0.1-1.4,0-2,0.1c-0.3-0.5-0.8-1-1.3-1.4
                	c-7.4-5.8-17.8-8.7-30.9-8.7c-13,0-23.3,2.9-30.8,8.7c-0.6,0.4-1,0.9-1.4,1.5c-0.6-0.1-1.2-0.2-1.9-0.1c-9.3,1.1-18.8,6.4-28.1,15.7
                	c-9.2,9.2-14.4,18.6-15.6,28c-0.1,0.7,0,1.4,0.1,2c-0.5,0.3-1,0.8-1.4,1.3c-5.8,7.4-8.7,17.8-8.7,30.9c0,13,2.9,23.3,8.7,30.8
                	c0.4,0.5,0.9,1,1.5,1.3c-0.1,0.6-0.2,1.3-0.1,1.9c1.1,9.3,6.4,18.8,15.7,28.1c9.2,9.2,18.6,14.4,28,15.6c0.2,0,0.5,0,0.7,0
                	c0.4,0,0.8-0.1,1.3-0.2c0.3,0.5,0.8,1,1.3,1.4c7.4,5.8,17.8,8.7,30.9,8.7c13,0,23.3-2.9,30.8-8.7c0.6-0.4,1-1,1.4-1.6
                	c0.4,0.1,0.8,0.2,1.2,0.2c0.2,0,0.5,0,0.7,0c9.3-1.1,18.8-6.4,28.1-15.7c9.2-9.2,14.4-18.6,15.6-28c0.1-0.7,0-1.4-0.1-2
                	C178.4,131.7,178.9,131.3,179.3,130.8z M183,99.8c0,11.8-2.7,21.5-7.7,27.9c-0.2,0.3-0.6,0.3-0.9,0.2c0,0,0,0,0,0l-5.5-2.3
                	c4.2-6.5,6.4-15.2,6.4-25.8c0-10.7-2.1-19.1-6.4-25.7l5.3-2.2c0.1,0,0.1-0.1,0.2-0.1c0.3-0.1,0.7,0,0.9,0.3
                	C180.5,78.7,183,88,183,99.8z M134.7,152.7c-1.5-1.5-2.4-3.6-2.4-5.7c0-2.2,0.8-4.2,2.4-5.7c1.5-1.5,3.6-2.4,5.7-2.4
                	c2.2,0,4.2,0.8,5.7,2.4c1.5,1.5,2.4,3.6,2.4,5.7c0,2.2-0.8,4.2-2.4,5.7C143.1,155.8,137.7,155.8,134.7,152.7z M153.4,145.7
                	c-0.3-3-1.6-5.8-3.7-7.9c-2.5-2.5-5.8-3.8-9.3-3.8s-6.8,1.4-9.3,3.8c-2.5,2.5-3.8,5.8-3.8,9.3c0,3.5,1.4,6.8,3.8,9.3
                	c1.5,1.5,3.3,2.5,5.3,3.2c-2.6,1.3-5.2,2.1-7.8,2.6l-23.9-57.4l18,7.4c-0.6,0.4-1.1,0.8-1.7,1.3c-3.9,3.9-3.9,10.2,0,14
                	c1.9,1.9,4.5,2.9,7,2.9c2.5,0,5.1-1,7-2.9c2.5-2.5,3.3-6,2.6-9.2l24.6,10.2C161.8,131.5,160.2,137.7,153.4,145.7z M95.4,169.8
                	c-4.5,0-8.1-3.6-8.1-8.1s3.6-8.1,8.1-8.1s8.1,3.6,8.1,8.1S99.8,169.8,95.4,169.8z M95.4,148.6c-7.2,0-13.1,5.9-13.1,13.1
                	c0,2.2,0.6,4.2,1.5,6c-2.8-1-5.2-2.2-7.3-3.7l23.7-57.5l7.5,18c-0.7-0.1-1.4-0.2-2.1-0.2c-5.5,0-9.9,4.5-9.9,9.9
                	c0,5.5,4.5,9.9,9.9,9.9c3.5,0,6.6-1.8,8.3-4.6l10.2,24.6c-2.6,1.9-8.1,5.1-18.6,5.9c1.8-2.3,3-5.1,3-8.2
                	C108.5,154.5,102.6,148.6,95.4,148.6z M47.4,134.5c1.5-1.5,3.6-2.4,5.7-2.4s4.2,0.8,5.7,2.4c1.5,1.5,2.4,3.6,2.4,5.7
                	c0,2.2-0.8,4.2-2.4,5.7c-3.1,3.1-8.4,3.1-11.5,0c-1.5-1.5-2.4-3.6-2.4-5.7C45,138.1,45.9,136,47.4,134.5z M62.4,149.5
                	c2.5-2.5,3.8-5.8,3.8-9.3c0-3.5-1.4-6.8-3.8-9.3c-2.5-2.5-5.8-3.8-9.3-3.8s-6.8,1.4-9.3,3.8c-1.5,1.5-2.5,3.3-3.2,5.3
                	c-1.3-2.6-2.1-5.2-2.6-7.8l57.4-23.9l-7.4,18c-0.4-0.6-0.8-1.1-1.3-1.7c-3.9-3.9-10.2-3.9-14,0c-3.9,3.9-3.9,10.2,0,14
                	c1.9,1.9,4.5,2.9,7,2.9c0.7,0,1.4-0.1,2.1-0.3l-10.2,24.6c-3.1-0.5-9.3-2.1-17.3-9C57.4,152.9,60.2,151.7,62.4,149.5z M38.4,108.3
                	c7.2,0,13.1-5.9,13.1-13.1c0-7.2-5.9-13.1-13.1-13.1c-2.2,0-4.2,0.6-6,1.5c1-2.8,2.2-5.2,3.7-7.3L93.6,100l-18,7.5
                	c0.1-0.7,0.2-1.4,0.2-2.1c0-5.5-4.5-9.9-9.9-9.9s-9.9,4.5-9.9,9.9c0,3.5,1.8,6.6,4.6,8.3l-24.6,10.2c-1.9-2.6-5.1-8.1-5.9-18.6
                	C32.5,107.2,35.3,108.3,38.4,108.3z M30.3,95.2c0-4.5,3.6-8.1,8.1-8.1s8.1,3.6,8.1,8.1c0,4.5-3.6,8.1-8.1,8.1S30.3,99.7,30.3,95.2z
                	 M59.9,44.9c2.2,0,4.2,0.8,5.7,2.4c3.2,3.2,3.2,8.3,0,11.5c-3.2,3.2-8.3,3.2-11.5,0s-3.2-8.3,0-11.5C55.7,45.7,57.7,44.9,59.9,44.9z
                	 M46.9,54.3c0.3,2.9,1.5,5.7,3.7,7.9c2.6,2.6,5.9,3.8,9.3,3.8s6.7-1.3,9.3-3.8c5.1-5.1,5.1-13.4,0-18.5c-1.5-1.5-3.3-2.5-5.3-3.2
                	c2.6-1.3,5.2-2.1,7.8-2.6l23.9,57.4l-18-7.4c0.6-0.4,1.1-0.8,1.7-1.3c3.9-3.9,3.9-10.2,0-14c-3.9-3.9-10.2-3.9-14,0
                	c-2.5,2.5-3.4,6-2.6,9.2L37.9,71.6C38.5,68.4,40.1,62.3,46.9,54.3z M104.9,30.2c4.5,0,8.1,3.6,8.1,8.1s-3.6,8.1-8.1,8.1
                	s-8.1-3.6-8.1-8.1S100.5,30.2,104.9,30.2z M104.9,51.4c7.2,0,13.1-5.9,13.1-13.1c0-2.2-0.6-4.2-1.5-6c2.8,1,5.2,2.2,7.3,3.7
                	l-23.7,57.5l-7.5-18c0.7,0.1,1.4,0.2,2.1,0.2c5.5,0,9.9-4.5,9.9-9.9s-4.5-9.9-9.9-9.9c-3.5,0-6.6,1.8-8.3,4.6L76.2,35.9
                	c2.6-1.9,8.1-5.1,18.6-5.9c-1.8,2.3-3,5.1-3,8.2C91.8,45.5,97.7,51.4,104.9,51.4z M155.3,59.7c0,2.2-0.8,4.2-2.4,5.7
                	c-3.1,3.1-8.4,3.1-11.5,0c-1.5-1.5-2.4-3.6-2.4-5.7c0-2.2,0.8-4.2,2.4-5.7c1.5-1.5,3.6-2.4,5.7-2.4c2.2,0,4.2,0.8,5.7,2.4
                	C154.4,55.5,155.3,57.6,155.3,59.7z M137.9,50.5c-2.5,2.5-3.8,5.8-3.8,9.3c0,3.5,1.4,6.8,3.8,9.3c2.5,2.5,5.8,3.8,9.3,3.8
                	c3.5,0,6.8-1.4,9.3-3.8c1.5-1.5,2.5-3.3,3.2-5.3c1.3,2.6,2.1,5.2,2.6,7.8l-57.4,23.9l7.4-18c0.4,0.6,0.8,1.1,1.3,1.7
                	c1.9,1.9,4.5,2.9,7,2.9s5.1-1,7-2.9c3.9-3.9,3.9-10.2,0-14c-2.5-2.5-6-3.4-9.2-2.6l10.2-24.6c3.1,0.5,9.3,2.1,17.3,9
                	C142.8,47.1,140.1,48.3,137.9,50.5z M161.9,91.7c-7.2,0-13.1,5.9-13.1,13.1s5.9,13.1,13.1,13.1c2.2,0,4.2-0.6,6-1.5
                	c-1,2.8-2.2,5.2-3.7,7.3L106.7,100l18-7.5c-0.1,0.7-0.2,1.4-0.2,2.1c0,5.5,4.5,9.9,9.9,9.9s9.9-4.5,9.9-9.9c0-3.5-1.8-6.6-4.6-8.3
                	l24.6-10.2c1.9,2.6,5.1,8.1,5.9,18.6C167.8,92.8,165,91.7,161.9,91.7z M170,104.8c0,4.5-3.6,8.1-8.1,8.1s-8.1-3.6-8.1-8.1
                	s3.6-8.1,8.1-8.1S170,100.3,170,104.8z M139.3,94.6c0,2.7-2.2,4.9-4.9,4.9c-2.7,0-4.9-2.2-4.9-4.9s2.2-4.9,4.9-4.9
                	C137,89.7,139.3,91.9,139.3,94.6z M117,68.5c1-1,2.2-1.4,3.5-1.4c1.3,0,2.5,0.5,3.5,1.4c1.9,1.9,1.9,5,0,7c-1.9,1.9-5,1.9-7,0
                	C115.1,73.6,115.1,70.5,117,68.5z M89.9,65.8c0-2.7,2.2-4.9,4.9-4.9s4.9,2.2,4.9,4.9c0,2.7-2.2,4.9-4.9,4.9
                	C92.1,70.7,89.9,68.5,89.9,65.8z M68.7,76.1c1-1,2.2-1.4,3.5-1.4c1.3,0,2.5,0.5,3.5,1.4c1.9,1.9,1.9,5,0,7c-1.9,1.9-5,1.9-7,0
                	C66.8,81.2,66.8,78,68.7,76.1z M61,105.3c0-2.7,2.2-4.9,4.9-4.9s4.9,2.2,4.9,4.9c0,2.7-2.2,4.9-4.9,4.9S61,108.1,61,105.3z
                	 M83.2,131.4c-1.9,1.9-5,1.9-7,0c-1.9-1.9-1.9-5,0-7c1.9-1.9,5-1.9,7,0C85.2,126.4,85.2,129.5,83.2,131.4z M110.4,134.2
                	c0,2.7-2.2,4.9-4.9,4.9s-4.9-2.2-4.9-4.9c0-2.7,2.2-4.9,4.9-4.9S110.4,131.5,110.4,134.2z M131.6,123.9c-1.9,1.9-5,1.9-7,0
                	c-1.9-1.9-1.9-5,0-7c1.9-1.9,5-1.9,7,0C133.5,118.8,133.5,121.9,131.6,123.9z M133.5,27.1c0,0,0.1,0,0.1,0c8.2,1,16.7,5.8,25,14.2
                	c8.4,8.4,13.3,17.1,14.3,25.1c0,0.3-0.2,0.6-0.5,0.8c0,0,0,0,0,0v0l-5.5,2.3c-1.6-7.6-6.2-15.3-13.7-22.8c-7.5-7.5-15-12-22.7-13.6
                	l2.2-5.3c0-0.1,0-0.1,0.1-0.2C132.9,27.3,133.2,27.1,133.5,27.1z M72.3,24.8c6.6-5.1,15.9-7.7,27.7-7.7c11.8,0,21.5,2.7,27.8,7.7
                	c0.3,0.2,0.4,0.6,0.2,0.9c0,0,0,0,0,0v0l-2.3,5.5c-6.5-4.2-15.2-6.4-25.8-6.4c-10.7,0-19.1,2.1-25.7,6.4l-2.2-5.3
                	c0-0.1-0.1-0.1-0.1-0.2C71.9,25.4,72,25,72.3,24.8z M41.4,41.5c8.4-8.4,17.1-13.3,25.1-14.3c0.3,0,0.6,0.2,0.8,0.5c0,0,0,0,0,0
                	l2.3,5.5c-7.6,1.6-15.3,6.2-22.8,13.7c-7.5,7.5-12,15-13.6,22.7l-5.3-2.2c-0.1,0-0.1,0-0.2-0.1c-0.3-0.2-0.5-0.5-0.5-0.9
                	C28.3,58.3,33,49.8,41.4,41.5z M17.2,100.1c0-11.8,2.7-21.5,7.7-27.9c0.2-0.2,0.4-0.3,0.7-0.3c0.1,0,0.1,0,0.2,0c0,0,0,0,0.1,0
                	l5.5,2.3c-4.2,6.5-6.4,15.2-6.4,25.8c0,10.7,2.1,19.1,6.4,25.7l-5.3,2.2c-0.1,0-0.1,0.1-0.2,0.1c-0.3,0.1-0.7,0-0.9-0.3
                	C19.8,121.3,17.2,112,17.2,100.1z M66.7,172.9c-8.3-1-16.7-5.8-25-14.2c-8.4-8.4-13.3-17.1-14.3-25.1c0-0.3,0.2-0.7,0.5-0.8
                	c0,0,0,0,0,0h0l5.5-2.3c1.6,7.6,6.2,15.3,13.7,22.8s15,12,22.7,13.6l-2.2,5.3c0,0.1,0,0.1-0.1,0.2C67.4,172.7,67,172.9,66.7,172.9z
                	 M128,175.2c-6.6,5.1-15.9,7.7-27.7,7.7c-11.8,0-21.5-2.7-27.9-7.7c-0.3-0.2-0.4-0.6-0.2-0.9c0,0,0,0,0,0l2.3-5.5
                	c6.5,4.2,15.2,6.4,25.8,6.4s19.1-2.1,25.7-6.4l2.2,5.3c0,0.1,0.1,0.1,0.1,0.2C128.4,174.6,128.3,175,128,175.2z M158.9,158.5
                	c-8.4,8.4-17.1,13.3-25.1,14.3c-0.3,0.1-0.6-0.2-0.8-0.5c0,0,0,0,0,0l-2.3-5.5c7.6-1.6,15.2-6.2,22.8-13.7c7.5-7.5,12-15,13.6-22.7
                	l5.3,2.2c0.1,0,0.1,0,0.2,0.1c0.3,0.2,0.5,0.5,0.5,0.9C172,141.7,167.2,150.1,158.9,158.5z"/>
                <path className="st0" d="M4.3,0.7c-1-1-2.6-1-3.5,0s-1,2.6,0,3.5l24,24c0.5,0.5,1.1,0.7,1.8,0.7s1.3-0.2,1.8-0.7c1-1,1-2.6,0-3.5
                	L4.3,0.7z"/>
                <path className="st0" d="M33.9,19.7c0.3,1.1,1.3,1.8,2.4,1.8c0.2,0,0.5,0,0.7-0.1c1.3-0.4,2.1-1.8,1.7-3.1L33.9,1.8
                	c-0.4-1.3-1.8-2.1-3.1-1.7c-1.3,0.4-2.1,1.8-1.7,3.1L33.9,19.7z"/>
                <path className="st0" d="M175.6,171.6c-1-1-2.6-1-3.5,0c-1,1-1,2.6,0,3.5l24,24c0.5,0.5,1.1,0.7,1.8,0.7c0.6,0,1.3-0.2,1.8-0.7
                	c1-1,1-2.6,0-3.5L175.6,171.6z"/>
                <path className="st0" d="M166.5,180.2c-0.4-1.3-1.8-2.1-3.1-1.7c-1.3,0.4-2.1,1.8-1.7,3.1l4.8,16.5c0.3,1.1,1.3,1.8,2.4,1.8
                	c0.2,0,0.5,0,0.7-0.1c1.3-0.4,2.1-1.8,1.7-3.1L166.5,180.2z"/>
                <path className="st0" d="M199.5,0.9c-1-1-2.6-1-3.5,0l-24,24c-1,1-1,2.6,0,3.5c0.5,0.5,1.1,0.7,1.8,0.7c0.6,0,1.3-0.2,1.8-0.7l24-24
                	C200.5,3.4,200.5,1.8,199.5,0.9z"/>
                <path className="st0" d="M163.3,21.5c0.2,0.1,0.5,0.1,0.7,0.1c1.1,0,2.1-0.7,2.4-1.8l4.8-16.5c0.4-1.3-0.4-2.7-1.7-3.1
                	c-1.3-0.4-2.7,0.4-3.1,1.7l-4.8,16.5C161.2,19.8,162,21.2,163.3,21.5z"/>
                <path className="st0" d="M0.7,199.3c0.5,0.5,1.1,0.7,1.8,0.7s1.3-0.2,1.8-0.7l24-24c1-1,1-2.6,0-3.5c-1-1-2.6-1-3.5,0l-24,24
                	C-0.2,196.7-0.2,198.3,0.7,199.3z"/>
                <path className="st0" d="M30.7,199.9c0.2,0.1,0.5,0.1,0.7,0.1c1.1,0,2.1-0.7,2.4-1.8l4.8-16.5c0.4-1.3-0.4-2.7-1.7-3.1
                	c-1.3-0.4-2.7,0.4-3.1,1.7L29,196.8C28.7,198.1,29.4,199.5,30.7,199.9z"/>
                </svg>
 
              </PricingCardIcon>
              <PricingCardPrice
                fontSize="3rem"
                fontWeight="bold"
                color="black"
              >
                $72
                <PricingCardCaption
                  fontSize="1.5rem"
                >
                /month
                </PricingCardCaption>
              </PricingCardPrice>
            </PricingCardHeader>
            <PricingCardContent
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              flex="1"
              p="8px 24px 24px"
            >
              <PricingCardList
                p="0"
                m="0"
              >
                <PricingCardListItem
                  p="16px 0"
                  display="flex"
                  fontSize="1.25rem"
                  fontWeight="regular"
                  color="black"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Embedable OurMenu widget
                </PricingCardListItem>
                <PricingCardListItem
                  p="16px 0"
                  display="flex"
                  fontSize="1.25rem"
                  fontWeight="regular"
                  color="black"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Unlimited items and menus
                </PricingCardListItem>
                <PricingCardListItem
                  p="16px 0"
                  display="flex"
                  fontSize="1.25rem"
                  fontWeight="regular"
                  color="black"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Update your menu on-demand with a call, text, or click
                </PricingCardListItem>
                <PricingCardListItem
                  p="16px 0"
                  display="flex"
                  fontSize="1.25rem"
                  fontWeight="regular"
                  color="black"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Customized social integration
                </PricingCardListItem>
                <PricingCardListItem
                  p="16px 0"
                  display="flex"
                  fontSize="1.25rem"
                  fontWeight="regular"
                  color="black"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Rich menus, with item images and options
                </PricingCardListItem>
                <PricingCardListItem
                  p="16px 0"
                  display="flex"
                  fontSize="1.25rem"
                  fontWeight="regular"
                  color="black"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Order and reserve buttons
                </PricingCardListItem>
                <PricingCardListItem
                  p="16px 0"
                  display="flex"
                  fontSize="1.25rem"
                  fontWeight="regular"
                  color="black"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  In-depth analytics and insights
                </PricingCardListItem>
                <PricingCardListItem
                  p="16px 0"
                  display="flex"
                  fontSize="1.25rem"
                  fontWeight="regular"
                  color="black"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Window stickers
                </PricingCardListItem>
                <PricingCardListItem
                  p="16px 0"
                  display="flex"
                  fontSize="1.25rem"
                  fontWeight="regular"
                  color="black"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Silver Service Approach
                </PricingCardListItem>
              </PricingCardList>
              <Link
                href={{ pathname: '/request-demo', query: { plan: 'deluxe' }}}
              >
                <PricingCardButton
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  border="2px solid"
                  borderColor="black"
                  borderRadius="8px"
                  bg="blue"
                  p="16px 14px"
                  fontSize="1.25rem"
                  fontWeight="bold"
                  color="black"
                >
                  Request your demo
                </PricingCardButton>
              </Link>
            </PricingCardContent>
          </PricingCard>
        </PricingGrid>
        <PricingBlack
          width="100%"
          maxWidth="880px"
          p="24px"
          m="auto"
          borderRadius="8px"
          bg="black"
          color="white"
          display="grid"
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr"]}
          gridGap="24px"
        >
          <PricingCardContent
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            flex="1"
            p="8px 24px 24px"
          >
            <PricingCardHeader>
              <PricingCardTitle
                fontSize="3rem"
                fontWeight="bold"
                lineHeight="3rem"
                color="white"
                m="0"
                mb="8px"
              >
                OurMenu Black
              </PricingCardTitle>
              <PricingCardCaption
                fontSize="1.5rem"
                fontWeight="regular"
              >
                Custom solutions for discerning clients.
              </PricingCardCaption>
            </PricingCardHeader>
            <PricingCardButton
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              border="2px solid"
              borderColor="white"
              borderRadius="8px"
              bg="black"
              p="16px 14px"
              fontSize="1.25rem"
              fontWeight="bold"
              color="white"
              href="mailto:black@ourmenu.co"
            >
              Learn more
            </PricingCardButton>
          </PricingCardContent>
          <PricingCardContent
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            flex="1"
            p="8px 24px 24px"
          >
            <PricingCardList
              p="0"
              m="0"
            >
              <PricingCardListItem
                p="16px 0"
                display="flex"
                fontSize="1.25rem"
                fontWeight="regular"
                color="white"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Social media management
              </PricingCardListItem>
              <PricingCardListItem
                p="16px 0"
                display="flex"
                fontSize="1.25rem"
                fontWeight="regular"
                color="white"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Presence management
              </PricingCardListItem>
              <PricingCardListItem
                p="16px 0"
                display="flex"
                fontSize="1.25rem"
                fontWeight="regular"
                color="white"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Content strategy
              </PricingCardListItem>
              <PricingCardListItem
                p="16px 0"
                display="flex"
                fontSize="1.25rem"
                fontWeight="regular"
                color="white"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Custom OurMenu integrations
              </PricingCardListItem>
              <PricingCardListItem
                p="16px 0"
                display="flex"
                fontSize="1.25rem"
                fontWeight="regular"
                color="white"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Reputation management
              </PricingCardListItem>
              <PricingCardListItem
                p="16px 0"
                display="flex"
                fontSize="1.25rem"
                fontWeight="regular"
                color="white"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Client success manager
              </PricingCardListItem>
            </PricingCardList>
          </PricingCardContent>
        </PricingBlack>
      </PageContent>
      <Footer />
    </PageWrapper>
);

export default Pricing;
