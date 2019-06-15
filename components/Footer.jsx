import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';
import {
  display,
  space,
  flexbox,
  color,
  typography,
  border,
} from 'styled-system'

const FooterWrapper = styled.footer(
  {
    boxSizing: 'border-box',
  },
  display,
  color,
  flexbox,
  space,
);

const FooterText = styled.span(
  {
    whiteSpace: 'pre-wrap',
    textAlign: 'center',

    '& svg': {
      verticalAlign: 'middle'
    }
  },
  typography,
  color,
  display,
  flexbox,
  space,
);

const FooterLinks = styled.div(
  {},
  display,
  flexbox,
);

const FooterLink = styled.a(
  {},
  typography,
  border,
  color,
  space,
);

const Footer = ({}) => (
  <FooterWrapper
    width="100vw"
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    bg="blue"
    color="black"
    p="16px 24px"
  >
    <FooterText
      fontSize="1rem"
      fontWeight="bold"
      color="black"
      display="block"
      mb="8px"
    >
      © 2019 Bland Marketing Agency. Made with <svg width="16" height="16" viewBox="0 0 24 24"><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" /></svg> in Halifax.
    </FooterText>
    <FooterLinks
      display="flex"
      flexDirection="row"
    >
      <Link href="/privacy">
        <FooterLink
          fontSize="1rem"
          fontWeight="regular"
          color="black"
          borderBottom="1px solid"
          mr="8px"
        >
          Privacy
        </FooterLink>
      </Link>
      <Link href="/terms">
        <FooterLink
          fontSize="1rem"
          fontWeight="regular"
          color="black"
          borderBottom="1px solid"
        >
          Terms
        </FooterLink>
      </Link>

    </FooterLinks>
  </FooterWrapper>
);

export default Footer;
