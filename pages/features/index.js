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
            Your success.
            <br/>
            Featuring OurMenu.
          </PageTitle>
        </PageHeader>
        <PageGrid
          display="grid"
          gridTemplateColumns={['1fr', '360px 1fr']}
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
                  Customizable
                </FeatureListItemTitle>
                <FeatureListItemContent
                  fontSize="1.5rem"
                  fontWeight="regular"
                  color="black"
                  p="0"
                  m="0"
                  display="inline-flex"
                >
                  Customize
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
                  Intelligent
                </FeatureListItemTitle>
                <FeatureListItemContent
                  fontSize="1.5rem"
                  fontWeight="regular"
                  color="black"
                  p="0"
                  m="0"
                  display="inline-flex"
                >
                  Customize
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
                  fontSize="1.5rem"
                  fontWeight="regular"
                  color="black"
                  p="0"
                  m="0"
                  display="inline-flex"
                >
                  Customize
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
                  Interactive
                </FeatureListItemTitle>
                <FeatureListItemContent
                  fontSize="1.5rem"
                  fontWeight="regular"
                  color="black"
                  p="0"
                  m="0"
                  display="inline-flex"
                >
                  Customize
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
                  fontSize="1.5rem"
                  fontWeight="regular"
                  color="black"
                  p="0"
                  m="0"
                  display="inline-flex"
                >
                  Customize
                </FeatureListItemContent>
              </FeatureListItem>

            </FeatureList>
          </PageContent>

        </PageGrid>
      </PageWrapper>
    );
  }

}

export default Features;
