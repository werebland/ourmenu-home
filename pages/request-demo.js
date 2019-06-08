import React, { Component } from 'react';
import Head from 'next/head'
import styled from 'styled-components';
import {
  typography,
  layout,
  space,
  color,
  display,
  flexbox,
  border,
} from 'styled-system'
import { withRouter } from 'next/router';

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

const PageSubtitle = styled.h3(
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
  display,
  flexbox,
);

const Form = styled.form(
  {
    boxSizing: 'boder-box'
  },
  layout,
  border,
  space,
  flexbox,
  display,
);

const Label = styled.label(
  {},
  typography,
  color,
  space,
);

const Input = styled.input(
  {
  },
  display,
  layout,
  space,
  border,
  typography,
);

const Textarea = styled.textarea(
  {},
  display,
  layout,
  space,
  border,
  typography,
);

const Submit = styled.input(
  {
    boxSizing: 'border-box',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

    ':hover': {
      backgroundColor: '#fff',
      color: '#1a1a1a',
    }
  },
  border,
  flexbox,
  space,
  typography,
  color,
);

class RequestDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.router.query.email || "",
      name: "",
      restaurant: "",
      website: "",
      message: "",
    }
  }

  componentDidMount() {
    console.log(this.props.router.query);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
}

  render() {
    return (
      <PageWrapper>
        <Head>
          <title>
            Get a free custom demo | OurMenu
          </title>
        </Head>
        <Nav transparent/>
        <PageHeader
          width="100vw"
          minHeight="50vh"
          bg="blue"
          color="black"
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
            color="black"
            m="0"
          >
            See what you're missing.
            <br/>
            Get a custom demo.
          </PageTitle>
        </PageHeader>
        <PageContent
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          p={['16px', '24px', '56px']}
        >
          <Form
            width="100%"
            maxWidth="560px"
            border="2px solid"
            borderColor="black"
            borderRadius="8px"
            p="24px"
            display="flex"
            flexDirection="column"
            onSubmit={(e) => this.handleSubmit(e)}
          >
            <Label
              fontSize=".875rem"
              fontWeight="bold"
              color="grey"
              mb="4px"
              htmlFor="name">
              Full name*
            </Label>
            <Input
              border="2px solid"
              borderColor="black"
              borderRadius="8px"
              display="flex"
              p="8px 16px"
              mb="16px"
              fontSize="1.25rem"
              fontWeight="regular"
              color="black"
              placeholder="Your name"
              type="text"
              autoComplete="on"
              required
              value={this.state.name}
              name="name"
              onChange={(e) => this.handleChange(e)}
            />
            <Label
              fontSize=".875rem"
              fontWeight="bold"
              color="grey"
              mb="4px"
              htmlFor="restaurant">
              Restaurant*
            </Label>
            <Input
              border="2px solid"
              borderColor="black"
              borderRadius="8px"
              display="flex"
              p="8px 16px"
              mb="16px"
              fontSize="1.25rem"
              fontWeight="regular"
              color="black"
              placeholder="Your restaurant"
              type="text"
              autoComplete="on"
              required
              value={this.state.restaurant}
              name="restaurant"
              onChange={(e) => this.handleChange(e)}
            />
            <Label
              fontSize=".875rem"
              fontWeight="bold"
              color="grey"
              mb="4px"
              htmlFor="email">
              Email*
            </Label>
            <Input
              border="2px solid"
              borderColor="black"
              borderRadius="8px"
              display="flex"
              flex="1"
              p="8px 16px"
              mb="16px"
              fontSize="1.25rem"
              fontWeight="regular"
              color="black"
              placeholder="Your email"
              type="email"
              autoComplete="on"
              required
              value={this.state.email}
              name="email"
              onChange={(e) => this.handleChange(e)}
            />
            <Label
              fontSize=".875rem"
              fontWeight="bold"
              color="grey"
              mb="4px"
              htmlFor="website">
              Website*
            </Label>
            <Input
              border="2px solid"
              borderColor="black"
              borderRadius="8px"
              display="flex"
              p="8px 16px"
              mb="16px"
              fontSize="1.25rem"
              fontWeight="regular"
              color="black"
              placeholder="Website"
              type="text"
              autoComplete="on"
              required
              value={this.state.website}
              name="website"
              onChange={(e) => this.handleChange(e)}
            />
            <Label
              fontSize=".875rem"
              fontWeight="bold"
              color="grey"
              mb="4px"
              htmlFor="message">
              Message
            </Label>
            <Textarea
              border="2px solid"
              borderColor="black"
              borderRadius="8px"
              display="flex"
              p="8px 16px"
              mb="16px"
              fontSize="1.25rem"
              fontWeight="regular"
              color="black"
              placeholder="Any questions, comments, or if you just want to hear a bad joke"
              rows="8"
              type="text"
              autoComplete="on"
              value={this.state.website}
              name="website"
              onChange={(e) => this.handleChange(e)}
            />
            <Submit
              border="2px solid"
              borderRadius='8px'
              borderColor="black"
              p="16px 24px"
              fontSize="1rem"
              fontWeight="bold"
              color="black"
              bg="blue"
              type="submit"
              value="Request your demo"
            />
          </Form>
        </PageContent>
      </PageWrapper>
    );
  }

}

export default withRouter(RequestDemo);
