import React, { Component } from 'react';
import Head from 'next/head'
import Router from 'next/router'
import styled from 'styled-components';
import {
  height,
  width,
  space,
  display,
  alignItems,
  justifyContent,
  flexDirection,
  typography,
  color,
  minHeight,
  maxWidth,
  border,
  borderRight,
  borderRadius,
  flex,
  flexbox,
  grid,
  layout,
} from 'styled-system'

import Nav from '../components/Nav'

const HeroSection = styled.section(
  {
    boxSizing: 'border-box',
  },
  height,
  width,
  space,
  display,
  justifyContent,
  alignItems,
  flexDirection,
);

const HeroContent = styled.div(
  {},
  display,
  flexDirection,
  alignItems,
  maxWidth,
);

const HeroTitle = styled.h1(
  {
    '& strong': {
      position: 'relative',
    },
    '& strong::after': {
      content: JSON.stringify(""),
      position: 'absolute',
      right: -8,
      bottom: 8,
      width: '95%',
      height: '24px',
      background: '#1BE7FF',
      display: 'block',
      zIndex: '-1'
    }
  },
  typography,
  color,
  space,
  display,
);

const HeroSubtitle = styled.span(
  {},
  typography,
  color,
  space,
  display,
);

const HeroCTAContainer = styled.form(
  {
    boxSizing: 'border-box'
  },
  display,
  layout,
  flexbox,
  space,
);

const HeroCTAInput = styled.input(
  {
    boxSizing: 'border-box'
  },
  border,
  borderRight,
  borderRadius,
  flex,
  space,
  typography,
  color,
  display,
  flex,
);

const HeroCTAButton = styled.input(
  {
    boxSizing: 'border-box',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

    ':hover': {
      backgroundColor: '#fff',
      color: '#1a1a1a',
    }
  },
  border,
  borderRadius,
  flex,
  space,
  typography,
  color,
);

const HeroCTACaption = styled.span(
  {
    textAlign: 'center',
  },
  typography,
  color,
  display,
  width,
);

const Hero = ({ email, handleSubmit, handleChange }) => (
  <HeroSection
    height="100vh"
    width="100vw"
    pt="128px"
    p={['128px 16px 16px', '128px 24px 24px', '128px 56px 56px']}
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
  >
    <HeroTitle
      fontSize={['3rem', '4rem']}
      fontWeight="bold"
      color="black"
      m="0 0 54px 0"
      display="block"
    >
      Your menu deserves <strong>better.</strong>
    </HeroTitle>
    <HeroContent
      display="inline-flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      maxWidth="540px"
    >
      <HeroSubtitle
        fontSize={['1.25rem', '1.5rem', '1.5rem']}
        fontWeight="regular"
        color="black"
        m="0 0 54px 0"
        display="inline-flex"
      >
        Take control of your diners' conversion path with OurMenu. Rich interactions, powerful customizability, and valueable insights all come together in one powerful tool, right where diners are.
      </HeroSubtitle>
      <HeroCTAContainer
        display="inline-flex"
        flexDirection={['column', 'row', 'row']}
        width="100%" mb="16px" onSubmit={(e) => handleSubmit(e)}>
        <HeroCTAInput
          type="email"
          placeholder="Your email"
          border="2px solid"
          borderRadius={['8px', '8px 0 0 8px', '8px 0 0 8px']}
          borderColor="black"
          p="16px 24px"
          fontSize="1.5rem"
          fontWeight="regular"
          color="black"
          borderRight={['2px solid', '0', '0']}
          mb={['16px', 0, 0]}
          display="flex"
          flex="1"
          required
          value={email}
          onChange={(e) => handleChange(e.target.value)}
        />
        <HeroCTAButton
          border="2px solid black"
          borderRadius={['8px', '0 8px 8px 0', '0 8px 8px 0']}
          p="16px 24px"
          fontSize="1.5rem"
          fontWeight="bold"
          color="black"
          bg="blue"
          value="Request a demo"
          type="submit"
        />
      </HeroCTAContainer>
      <HeroCTACaption
        fontSize="1rem"
        fontWeight="regular"
        color="grey"
        width="100%"
        display="block"
      >
        14-day free trial · Custom setup · Cancel anytime
      </HeroCTACaption>
    </HeroContent>
  </HeroSection>
);

const Callout = styled.section(
  {},
  display,
  flexbox,
  space,
);

const CalloutTitle = styled.h2(
  {
    textAlign: 'center',
    '& strong': {
      position: 'relative',
    },
    '& strong::after': {
      content: JSON.stringify(""),
      position: 'absolute',
      right: -8,
      bottom: 8,
      width: '95%',
      height: '24px',
      background: '#1BE7FF',
      display: 'block',
      zIndex: '-1'
    }
  },
  typography,
  color,
  space,
  display,
);

const CalloutSubtitle = styled.span(
  {},
  typography,
  color,
  space,
  display,
  layout,
);

const Grid = styled.section(
  {},
  display,
);

const GridItem = styled.article(
  {
    boxSizing: 'border-box',
  },
  display,
  height,
  space,
  grid,
  color,
);

const GridShowcase = styled.div(
  {
    boxSizing: 'border-box',
  },
  color,
  space,
  display,
  flexbox,
);

const GridContent = styled.div(
  {},
  display,
  flexbox,
  space,
);

const GridItemTitle = styled.h3(
  {},
  typography,
  color,
  space,
);

const GridItemText = styled.p(
  {

  },
  typography,
  color,
  space,
);

const GridItemButton = styled.a(
  {
    float: "left",
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    ':hover': {
      background: 'white',
      color: '#1a1a1a'
    }
  },
  border,
  color,
  display,
  flexbox,
  space,
  typography,
  height,
);

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    Router.push({ pathname: '/request-demo', query: { email: this.state.email } })
  }

  render() {
    return (
        <div>
          <Head>
            <title>Menu management that fuels growth | OurMenu</title>
            <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86" />
          </Head>
            <Nav />
            <Hero
              handleSubmit={(e) => this.handleSubmit(e)}
              handleChange={(email) => this.setState({email})}
              email={this.state.email}
            />
            <Callout
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <CalloutTitle
                fontSize="2rem"
                fontWeight="bold"
                color="black"
                m="0 0 54px 0"
                display="block"
              >
              OurMenu is the menu management platform of tomorrow
              <br/>
              for the restaurants of today.
              </CalloutTitle>
              <CalloutSubtitle
                fontSize="1.5rem"
                fontWeight="regular"
                color="black"
                m="0 0 54px 0"
                display="block"
                maxWidth="540px"
              >
                <strong>93% of diners</strong> look at a menu online. Now, they are interacting with outdated PDFs or being taken off of your site to a third party. That’s sacrificing valuable opportunities for engagement and insight.
              </CalloutSubtitle>
            </Callout>
            <Grid>
              <GridItem
                display="grid"
                gridTemplateColumns={["1fr", "352px 1fr"]}
                gridGap={["16px", "56px"]}
                p={['16px', '56px']}
                height="100%"
                minHeight="188px"
              >
                <GridShowcase
                  bg="black"
                  width="352px"
                  height="100%"
                  p="16px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <svg width="320px" height="156px" viewBox="0 0 320 156" version="1.1">
                      <g id="App" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="Widget---Collapsed" transform="translate(-16.000000, -16.000000)">
                              <g id="Group-2" transform="translate(16.000000, 16.000000)">
                                  <rect id="Rectangle" fill="#FFFFFF" x="256" y="92" width="64" height="64" rx="8"></rect>
                                  <g id="round-restaurant_menu-24px" transform="translate(270.000000, 106.000000)">
                                      <polygon id="Shape" points="0 0 36 0 36 36 0 36"></polygon>
                                      <path d="M10.5591933,20.251507 L15.3425191,15.4681811 L4.88005023,5.02261444 C4.06874408,4.21130829 2.66586053,4.43103704 2.15879419,5.47897415 C0.958737171,7.99740367 1.39819467,11.0905084 3.47716668,13.1863826 L10.5591933,20.251507 Z M22.0188927,17.1922067 C24.604931,18.3922637 28.2389065,17.5471532 30.9263581,14.8597015 C34.1546805,11.6313791 34.7800623,7.00017319 32.2954373,4.5155481 C29.8277144,2.04782522 25.1965084,2.65630484 21.9512838,5.88462723 C19.2638322,8.57207886 18.4187216,12.2060543 19.6187786,14.7920927 L4.30537504,30.1054963 C3.6461888,30.7646825 3.6461888,31.8295219 4.30537504,32.4887081 C4.96456129,33.1478944 6.02940062,33.1478944 6.68858686,32.4887081 L17.1510558,22.0600436 L27.5966225,32.5056103 C28.2558087,33.1647966 29.320648,33.1647966 29.9798343,32.5056103 C30.6390205,31.8464241 30.6390205,30.7815847 29.9798343,30.1223985 L19.5342676,19.6768318 L22.0188927,17.1922067 Z" id="Shape" fill="#000000" fill-rule="nonzero"></path>
                                  </g>
                                  <g id="Group">
                                      <rect id="Rectangle" fill="#FFFFFF" x="0" y="0" width="320" height="76" rx="8"></rect>
                                      <text id="Thank-you-for-visiti" fontFamily="SourceSansPro-Regular, Source Sans Pro" fontSize="18" fontWeight="normal" lineSpacing="22" fill="#000E1A">
                                          <tspan x="16" y="34">Thank you for visiting Darcia. Please </tspan>
                                          <tspan x="16" y="56">take a look at our menu below</tspan>
                                          <tspan x="242.188" y="55.838" fontFamily="SourceSansPro-Bold, Source Sans Pro" fontWeight="bold"> </tspan>
                                          <tspan x="253.6465" y="53" fontFamily="AppleColorEmoji, Apple Color Emoji">👇</tspan>
                                          <tspan x="267.842" y="56">!</tspan>
                                      </text>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </svg>
                </GridShowcase>
                <GridContent
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                mr={["16px", '56px']}
                >
                  <div>
                    <GridItemTitle
                      fontSize="3rem"
                      fontWeight="bold"
                      color="black"
                      lineHeight="3rem"
                      m="0"
                      mb="24px"
                    >
                      The OurMenu Widget
                    </GridItemTitle>
                    <GridItemText
                      fontSize="1.5rem"
                      fontWeight="regular"
                      color="black"
                      lineHeight="1.5rem"
                      p="0"
                      m="0"
                      mb="24px"
                    >
                    Have diners visiting your website interacting with your menu immediately. No more digging through pages to find a plain PDF. The OurMenu widget embeds a powerful and feature-rich menu right on your homepage.
                    <br/>
                    <br/>
                    While diners search, interact, and convert, you gain valuable insights into their activity and how your menu performs.
                    </GridItemText>
                  </div>
                  <GridItemButton
                    border="2px solid black"
                    borderColor="black"
                    borderRadius="8px"
                    p="16px 48px"
                    display="flex"
                    flexGrow="0"
                    alignItems="center"
                    justifyContent="center"
                    bg="blue"
                    color="black"
                    fontSize="1.5rem"
                    fontWeight="bold"
                  >
                    Get a custom demo
                  </GridItemButton>
                </GridContent>
              </GridItem>
              <GridItem
                display="grid"
                gridTemplateColumns={["100%", "50% 50%"]}
                gridGap={["16px", "56px"]}
                p={['16px', '56px']}
                height="100vh"
              >
                <GridContent
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                mr={["16px", '56px']}
                >
                  <div>
                    <GridItemTitle
                      fontSize="3rem"
                      fontWeight="bold"
                      color="black"
                      lineHeight="3rem"
                      m="0"
                      mb="24px"
                    >
                      Features for Growth
                    </GridItemTitle>
                    <GridItemText
                      fontSize="1.5rem"
                      fontWeight="regular"
                      color="black"
                      lineHeight="1.5rem"
                      p="0"
                      m="0"
                      mb="24px"
                    >
                    Every day, hungry diners are looking at your menu, waiting to be converted. OurMenu gives you the perfect tools and expertise to make this happen.
                    <br/>
                    <br/>
                    Target and engage diners right on your website with the OurMenu widget. Retain and grow your customer base with intelligent insights and social media integrations. All of this provided with our signature silver service approach makes OurMenu the perfect partner to drive your restaurant’s growth.
                    </GridItemText>
                  </div>
                  <GridItemButton
                    border="2px solid black"
                    borderColor="black"
                    borderRadius="8px"
                    p="16px 48px"
                    display="flex"
                    flexGrow="0"
                    alignItems="center"
                    justifyContent="center"
                    bg="blue"
                    color="black"
                    fontSize="1.5rem"
                    fontWeight="bold"
                  >
                    Get a custom demo
                  </GridItemButton>
                </GridContent>
                <GridShowcase
                  bg="black"
                  mr={["16px", '56px']}
                >
                  Showcase
                </GridShowcase>

              </GridItem>
              <GridItem
                display="grid"
                gridTemplateColumns={["100%", "50% 50%"]}
                gridGap={["16px", "56px"]}
                p={['16px', '56px']}
                bg="black"
                height="100vh"
              >
                <GridShowcase>
                  Showcase
                </GridShowcase>
                <GridContent
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                mr={["16px", '56px']}
                >
                  <div>
                    <GridItemTitle
                      fontSize="3rem"
                      fontWeight="bold"
                      color="white"
                      lineHeight="3rem"
                      m="0"
                      mb="24px"
                    >
                      The Silver Service Approach
                    </GridItemTitle>
                    <GridItemText
                      fontSize="1.5rem"
                      fontWeight="regular"
                      color="white"
                      lineHeight="1.5rem"
                      p="0"
                      m="0"
                      mb="24px"
                    >
                    We are invested in your long-term growth. To accomplish this, we get to know every restaurant personally and understand their unique goals. Communication is key, so whether it’s a feature request, support ticket, or adding a special to your menu, we’re available over email, phone, text, Messenger, WhatsApp, and our hologram is coming soon.
                    </GridItemText>
                  </div>

                  <GridItemButton
                    border="2px solid white"
                    borderColor="white"
                    borderRadius="8px"
                    p="16px 48px"
                    display="flex"
                    flexGrow="0"
                    alignItems="center"
                    justifyContent="center"
                    bg="black"
                    color="white"
                    fontSize="1.5rem"
                    fontWeight="bold"
                  >
                    See how fast we are
                  </GridItemButton>
                </GridContent>
              </GridItem>
            </Grid>
        </div>
    );
  }

}

export default Index;
