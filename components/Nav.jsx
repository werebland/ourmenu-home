import React, { Component } from 'react';
import Link from 'next/link'
import Router from 'next/router';
import styled, { createGlobalStyle } from 'styled-components';
import {
  position,
  color,
  space,
  display,
  fontSize,
  fontWeight,
  border,
  layout,
  flexbox,
  typography,
} from 'styled-system'
import posed, { PoseGroup } from 'react-pose'
import MediaQuery from 'react-responsive'
import { HamburgerSpin } from 'react-animated-burgers'

const NavWrapper = styled.div(
  {},
  position,
  layout,
  color,
  display,
);

const Alert = styled.div(
  {
    boxSizing: 'border-box'
  },
  layout,
  display,
  flexbox,
  typography,
  color,
  space,
  position,
);

const AlertText = styled.span(
  {},
  typography,
  color,
  space
);

const AlertAction = styled.a(
  {
    cursor: 'pointer'
  },
  typography,
  color,
);

const NavBar = styled.div(
  {
    boxSizing: 'border-box',
  },
  position,
  layout,
  color,
  display,
  space,
  flexbox,
  typography
);

const NavBrand = styled.div(
  {
    cursor: 'pointer',
  },
  display,
  color,
);

const NavLinks = styled.div(
  {},
  display,
  flexbox,
  layout,
);

const NavLink = styled.a(
  {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  typography,
  color,
  space,
);

const NavSled = posed.div(
  {
    enter: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -128,
      opacity: 0,
    }
  }
)

const NavOverlay = styled.div(
  {
    boxSizing: 'border-box',
  },
  layout,
  position,
  color,
);

const NavCTAContainer = styled.form(
  {
    boxSizing: 'border-box'
  },
  display,
  flexbox,
  layout,
  space,
);

const NavCTAInput = styled.input(
  {
    boxSizing: 'border-box'
  },
  border,
  display,
  flexbox,
  space,
  typography,
  color,
);

const NavCTAButton = styled.input(
  {
    boxSizing: 'border-box',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

    ':hover': {
      backgroundColor: '#fff',
      color: '#1a1a1a',
    }
  },
  border,
  display,
  flexbox,
  space,
  typography,
  color,
);

const NavToggle = styled.div(
  layout,
  border,
  display,
  position,
  flexbox,
  space,
  color,
);

const StyledHamburger = styled(HamburgerSpin)`
  & div span {
    border-radius: 1px !important;
    background-color: ${props => props.color};
  }

  & div span::before {
    border-radius: 1px !important;
    background-color: ${props => props.color};
  }

  & div span::after {
    border-radius: 1px !important;
    background-color: ${props => props.color};
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      email: ""
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    Router.push({ pathname: '/request-demo', query: { email: this.state.email } })
  }

  render() {
    return (
      <NavWrapper
        position="fixed"
        width="100vw"
        zIndex="8"
      >
        <Alert
          width="100%"
          height="48px"
          bg="black"
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
          pl={['16px', '24px', '56px']}
          pr={['16px', '24px', '56px']}
          position="relative"
          zIndex="8"
        >
          <AlertText
            fontSize="1rem"
            fontWeight="bold"
            mr="16px"
          >
            We're in Halifax. Let us buy you a beer.
          </AlertText>
          <Link href="/contact">
            <AlertAction
              fontSize="1rem"
              fontWeight="bold"
              color="blue"
            >
              Contact us
            </AlertAction>
          </Link>
        </Alert>
        <NavBar
          position="relative"
          zIndex='88'
          width="100%"
          height="128px"
          bg={this.props.inverted ? 'black' : this.props.transparent ? 'blue' : 'white'}
          display="flex"
          pt="24px"
          pb="24px"
          pl={['16px', '24px', '56px']}
          pr={['16px', '24px', '56px']}
          alignItems="center"
          justifyContent="space-between"
        >
        <NavBrand>
          <Link
            href="/"
          >
            <svg width="72px" height="72px" viewBox="0 0 72 72">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Landing-Page" transform="translate(-64.000000, -26.000000)">
                        <g id="Group-49" transform="translate(64.000000, 26.000000)">
                            <polygon id="Fill-1" fill={this.props.inverted ? "#fff" : "#1a1a1a"} points="0 72 72 72 72 0 0 0"></polygon>
                            <g id="Group-48" transform="translate(5.400000, 42.450000)" fill={this.props.inverted ? "#1a1a1a" : "#fff"}>
                                <path d="M6.1004925,8.527665 C7.4671425,8.527665 8.4575925,7.53564 8.4575925,6.146715 C8.4575925,4.73799 7.4077425,3.745965 6.1004925,3.745965 C4.7736675,3.745965 3.7238175,4.73799 3.7238175,6.146715 C3.7238175,7.53564 4.6744425,8.527665 6.1004925,8.527665 M6.1202925,0.75009 C9.4874175,0.75009 12.1811175,2.972415 12.1811175,6.146715 C12.1811175,9.28164 9.6260175,11.52354 6.1202925,11.52354 C2.4561675,11.52354 6.74999992e-05,9.28164 6.74999992e-05,6.146715 C6.74999992e-05,2.972415 2.6937675,0.75009 6.1202925,0.75009" id="Fill-2"></path>
                                <path d="M16.4992725,5.888955 C16.4992725,7.892805 17.0340975,8.66658 18.4999725,8.66658 C19.9653975,8.66658 20.5002225,7.892805 20.5002225,5.888955 L20.5002225,1.04763 L24.0059475,1.04763 L24.0059475,6.74193 C24.0059475,10.154505 22.3026975,11.52363 18.4999725,11.52363 C14.6967975,11.52363 12.9935475,10.154505 12.9935475,6.74193 L12.9935475,1.04763 L16.4992725,1.04763 L16.4992725,5.888955 Z" id="Fill-4"></path>
                                <path d="M25.5513375,1.04772 L29.0570625,1.04772 L29.0570625,2.515845 L29.0966625,2.515845 C29.0966625,2.515845 30.2059125,0.750045 32.2061625,0.750045 C33.5136375,0.750045 34.4248875,1.384995 34.4248875,1.384995 L32.9587875,4.36107 C32.9587875,4.36107 32.3053875,3.805545 31.1365125,3.805545 C29.3144625,3.805545 29.0570625,5.610945 29.0570625,5.86902 L29.0570625,11.22582 L25.5513375,11.22582 L25.5513375,1.04772 Z" id="Fill-6"></path>
                                <path d="M0.73278,13.67409 L4.23873,13.67409 L4.23873,14.74554 L4.27833,14.74554 C5.070555,13.951515 6.080805,13.376415 7.18983,13.376415 C8.53668,13.376415 10.02213,13.872315 10.73538,15.24144 C11.804805,13.951515 12.993255,13.376415 14.102505,13.376415 C15.964155,13.376415 18.06363,14.308815 18.06363,17.14629 L18.06363,23.85219 L14.557905,23.85219 L14.557905,18.09849 C14.557905,17.086665 14.02308,16.193865 12.77523,16.193865 C11.666205,16.193865 11.19078,17.007015 11.15118,17.78124 L11.15118,23.85219 L7.645455,23.85219 L7.645455,18.09849 C7.645455,17.086665 7.11063,16.193865 5.86278,16.193865 C4.69413,16.193865 4.23873,17.086665 4.23873,17.90004 L4.23873,23.85219 L0.73278,23.85219 L0.73278,13.67409 Z" id="Fill-8"></path>
                                <path d="M26.482095,17.3048475 C26.32347,16.2333975 25.590645,15.6580725 24.560595,15.6580725 C23.352345,15.6580725 22.679145,16.3722225 22.61952,17.3048475 L26.482095,17.3048475 Z M22.520745,19.2495225 C22.520745,20.8164225 23.82777,21.3521475 24.71922,21.3521475 C25.848045,21.3521475 26.34327,21.1341225 27.194895,20.2215225 L29.730195,21.4911975 C28.581345,23.4158475 26.719695,24.1500225 24.461595,24.1500225 C21.39147,24.1500225 18.87597,21.7292475 18.87597,18.7729725 C18.87597,15.7971225 21.39147,13.3763475 24.461595,13.3763475 C27.551295,13.3763475 29.908395,15.2015475 29.908395,18.7729725 C29.908395,18.9120225 29.908395,19.1300475 29.888595,19.2495225 L22.520745,19.2495225 Z" id="Fill-10"></path>
                                <path d="M30.87927,13.67409 L34.384995,13.67409 L34.384995,14.74554 L34.424595,14.74554 C35.21682,13.951515 36.22707,13.376415 37.336095,13.376415 C39.19797,13.376415 41.79267,14.308815 41.79267,17.14629 L41.79267,23.85219 L38.28672,23.85219 L38.28672,18.09849 C38.28672,17.086665 37.59372,16.11444 36.464445,16.11444 C35.415045,16.11444 34.384995,17.086665 34.384995,18.09849 L34.384995,23.85219 L30.87927,23.85219 L30.87927,13.67409 Z" id="Fill-12"></path>
                                <path d="M46.6455375,18.515325 C46.6455375,20.519175 47.1803625,21.29295 48.6462375,21.29295 C50.1116625,21.29295 50.6464875,20.519175 50.6464875,18.515325 L50.6464875,13.674 L54.1522125,13.674 L54.1522125,19.3683 C54.1522125,22.780875 52.4489625,24.15 48.6462375,24.15 C44.8430625,24.15 43.1398125,22.780875 43.1398125,19.3683 L43.1398125,13.674 L46.6455375,13.674 L46.6455375,18.515325 Z" id="Fill-14"></path>
                                <path d="M60.075,21.8881425 C60.075,23.1380175 59.06475,24.1500675 57.7971,24.1500675 C56.54925,24.1500675 55.539225,23.1380175 55.539225,21.8881425 C55.539225,20.6180175 56.54925,19.6064175 57.7971,19.6064175 C59.06475,19.6064175 60.075,20.6180175 60.075,21.8881425" id="Fill-16"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
          </Link>
        </NavBrand>
        <NavLinks>
          <MediaQuery minWidth={'64em'}>
            <Link
              href="/features"
            >
              <NavLink
                display="inline-flex"
                color={this.props.inverted ? 'white' : 'black'}
                fontWeight="bold"
                fontSize="1rem"
                ml="24px"
              >
                Features
              </NavLink>
            </Link>
            <Link
              href="/pricing"
            >
              <NavLink
                display="inline-flex"
                color={this.props.inverted ? 'white' : 'black'}
                fontWeight="bold"
                fontSize="1rem"
                ml="24px"
              >
                Pricing
              </NavLink>
            </Link>
            <Link
              href="/onboard"
            >
              <NavLink
                display="inline-flex"
                color={this.props.inverted ? 'white' : 'black'}
                fontWeight="bold"
                fontSize="1rem"
                ml="24px"
              >
                Upload your menu
              </NavLink>
            </Link>
            <Link
              href="/contact"
            >
              <NavLink
                display="inline-flex"
                color={this.props.inverted ? 'white' : 'black'}
                fontWeight="bold"
                fontSize="1rem"
                ml="24px"
              >
                Contact
              </NavLink>
            </Link>
            <NavCTAContainer
              display="inline-flex"
              ml="24px"
              onSubmit={(e) => this.handleSubmit(e)}>
              <NavCTAInput
                type="email"
                placeholder="Your email"
                border="2px solid black"
                borderRadius='4px 0 0 4px'
                m="0"
                p="8px 16px"
                fontSize="1rem"
                fontWeight="regular"
                color="black"
                borderRight="0"
                required
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <NavCTAButton
                border="2px solid black"
                borderRadius='0 4px 4px 0'
                p="8px 16px"
                m="0"
                fontSize="1rem"
                fontWeight="bold"
                color="black"
                bg="blue"
                value="Request a demo"
                type="submit"
                />
            </NavCTAContainer>
          </MediaQuery>
          <MediaQuery maxWidth={'64em'}>
            <NavToggle
              display="flex"
              zIndex="88"
            >
              <StyledHamburger
                className="nav-hamburger"
                color={this.props.inverted ? 'white' : 'black'}
                isActive={this.state.isOpen}
                buttonWidth={32}
                toggleButton={() => this.setState({ isOpen: !this.state.isOpen})}/>
            </NavToggle>
          </MediaQuery>
        </NavLinks>
        </NavBar>
        <PoseGroup>
          {this.state.isOpen &&
            <NavSled key="0">
              <NavOverlay
                position="fixed"
                width="100vw"
                height="100vh"
                zIndex="16"
                bg={this.props.inverted ? 'black' : this.props.transparent ? 'blue' : 'white'}
                display="flex"
                flexDirection="column nowrap"
                opacity="1"
              >
                <NavLinks
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  width="100%"
                >
                  <Link
                    href="/features"
                  >
                    <NavLink
                      display="inline-flex"
                      color={this.props.inverted ? 'white' : 'black'}
                      fontWeight="bold"
                      fontSize="2rem"
                      mb="24px"
                    >
                      Features
                    </NavLink>
                  </Link>
                  <Link
                    href="/pricing"
                  >
                    <NavLink
                      display="inline-flex"
                      color={this.props.inverted ? 'white' : 'black'}
                      fontWeight="bold"
                      fontSize="2rem"
                      mb="24px"
                    >
                      Pricing
                    </NavLink>
                  </Link>
                  <Link
                    href="/onboard"
                  >
                    <NavLink
                      display="inline-flex"
                      color={this.props.inverted ? 'white' : 'black'}
                      fontWeight="bold"
                      fontSize="2rem"
                      mb="24px"
                    >
                      Upload your menu
                    </NavLink>
                  </Link>
                  <Link
                    href="/contact"
                  >
                    <NavLink
                      display="inline-flex"
                      color={this.props.inverted ? 'white' : 'black'}
                      fontWeight="bold"
                      fontSize="2rem"
                      mb="24px"
                    >
                      Contact
                    </NavLink>
                  </Link>
                  <NavCTAContainer
                    display="inline-flex"
                    flexDirection="column"
                    onSubmit={(e) => this.handleSubmit(e)}>
                    <NavCTAInput
                      type="email"
                      placeholder="Your email"
                      border="2px solid black"
                      borderRadius='4px'
                      p="8px 16px"
                      mb="8px"
                      fontSize="1rem"
                      fontWeight="regular"
                      color="black"
                      required
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    <NavCTAButton
                      border="2px solid black"
                      borderRadius='4px'
                      p="8px 16px"
                      fontSize="1rem"
                      fontWeight="bold"
                      color="black"
                      bg="blue"
                      value="Request a demo"
                      type="submit"
                      />
                  </NavCTAContainer>
                </NavLinks>
              </NavOverlay>
            </NavSled>
          }
        </PoseGroup>
      </NavWrapper>
    );
  }

}

export default Nav;
