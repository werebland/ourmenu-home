import React, { Component } from 'react';
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

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

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

const PageGrid = styled.section(
  {},
  display,
  grid,
  space,
);

const WidgetOverview = styled.div(
  {
    boxShadow: '0 2px 4px rgba(0, 0, 0, .125)',
  },
  display,
  layout,
  background,
  border,
  space,
);

const FeatureList = styled.ul(
  {
    listStyle: 'none'
  },
  space,
  display,
  flexbox,
);

const FeatureListItem = styled.li(
  {},
  space,
  display,
  flexbox,
);

const FeatureListItemTitle = styled.h4(
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
  position,
  typography,
  color,
  display,
  space
);

const FeatureListItemContent = styled.p(
  {},
  typography,
  space,
  display,
);

class Features extends Component {

  render() {
    return (
      <PageWrapper>
        <Head>
          <title>
            Powerful features for your restaurant's menu | OurMenu
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
            Your success.
            <br/>
            Featuring OurMenu.
          </PageTitle>
        </PageHeader>
        <PageGrid
          display="grid"
          gridTemplateColumns={['1fr', '1fr', '360px 1fr']}
          gridGap={['16px', '56px']}
          p={['16px', '24px', '56px']}
        >
          <WidgetOverview
            display="block"
            width="360px"
            height="600px"
            backgroundImage="url(/static/ourmenu-widget-overview.png)"
            backgroundSize="cover"
            backgroundPosition="center"
            borderRadius="8px"
            m="auto"
          />
          <PageContent>
            <PageSubtitle
              fontSize="1.5rem"
              fontWeight="bold"
              color="black"
              m="0"
              mb="16px"
            >
              OurMenu is tailored to the unique needs of our restaurant clients. We understand what it takes to grow and be competitive and have tailored offerings to help you succeed.
              <br/>
              <br/>
              That's why we've made OurMenu:
            </PageSubtitle>
            <FeatureList
              p="0"
              m="0"
              display="flex"
              flexDirection="column"
            >
              <FeatureListItem
                display="inline-flex"
                flexDirection="column"
                alignItems="flex-start"
                mb="16px"
              >
                <FeatureListItemTitle
                  fontSize="2rem"
                  fontWeight="bold"
                  color="black"
                  m="0"
                  mb="8px"
                  position="relative"
                  display="inline-flex"
                >
                  Purposeful
                </FeatureListItemTitle>
                <FeatureListItemContent
                  fontSize="1.125rem"
                  fontWeight="regular"
                  color="black"
                  p="0"
                  m="0"
                  display="inline-flex"
                >
                  Every day, hungry diners are looking at your menu, waiting to be converted. OurMenu gives you the perfect tools and expertise to make this happen. Target and engage diners right on your website with the OurMenu widget. Retain and grow your customer base with intelligent insights and social media integrations. All of this provided with our signature silver service approach makes OurMenu the perfect partner to drive your restaurant’s growth.
                </FeatureListItemContent>
              </FeatureListItem>
              <FeatureListItem
                display="inline-flex"
                flexDirection="column"
                alignItems="flex-start"
                mb="16px"
              >
                <FeatureListItemTitle
                  fontSize="2rem"
                  fontWeight="bold"
                  color="black"
                  m="0"
                  mb="8px"
                  position="relative"
                  display="inline-flex"
                >
                  Customizable
                </FeatureListItemTitle>
                <FeatureListItemContent
                  fontSize="1.125rem"
                  fontWeight="regular"
                  color="black"
                  p="0"
                  m="0"
                  display="inline-flex"
                >
                  Your restaurant has its own personality and business needs. Embrace it with OurMenu. Add beautiful imagery to make your widget your own. Focus on the conversion actions that matter to you. Integrate your social channels to keep diners in the loop. OurMenu is its most powerful when it’s customized to your needs.
                </FeatureListItemContent>
              </FeatureListItem>
              <FeatureListItem
                display="inline-flex"
                flexDirection="column"
                alignItems="flex-start"
                mb="16px"
              >
                <FeatureListItemTitle
                  fontSize="2rem"
                  fontWeight="bold"
                  color="black"
                  m="0"
                  mb="8px"
                  position="relative"
                  display="inline-flex"
                >
                  Social
                </FeatureListItemTitle>
                <FeatureListItemContent
                  fontSize="1.125rem"
                  fontWeight="regular"
                  color="black"
                  p="0"
                  m="0"
                  display="inline-flex"
                >
                  OurMenu is built from the ground up with social sharing in mind. Help your diners spread the word by allowing them to share rich snippets of your menu and dishes. Optimized for Facebook and Twitter, helping you put your best foot forward.
                </FeatureListItemContent>
              </FeatureListItem>
              <FeatureListItem
                display="inline-flex"
                flexDirection="column"
                alignItems="flex-start"
                mb="16px"
              >
                <FeatureListItemTitle
                  fontSize="2rem"
                  fontWeight="bold"
                  color="black"
                  m="0"
                  mb="8px"
                  position="relative"
                  display="inline-flex"
                >
                  Insightful
                </FeatureListItemTitle>
                <FeatureListItemContent
                  fontSize="1.125rem"
                  fontWeight="regular"
                  color="black"
                  p="0"
                  m="0"
                  display="inline-flex"
                >
                  By having your menu ready to be interacted with right on your homepage, OurMenu can provide valuable analytics like never before. Track directions, phone calls, and social shares. Learn what works best for your diners to build loyalty and grow your business.
                </FeatureListItemContent>
              </FeatureListItem>
            </FeatureList>
          </PageContent>
        </PageGrid>
        <Footer />
      </PageWrapper>
    );
  }

}

export default Features;
