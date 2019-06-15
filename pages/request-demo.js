import React, { Component, Fragment } from 'react';
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
import Dropzone from 'react-dropzone'
import base from '../config'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

var storageRef = firebase.storage().ref();

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

const Uploader = styled.div(
  {
    boxSizing: 'border-box',
  },
  border,
  color,
  layout,
  display,
  flexbox,
  space,
  color,
  typography,
);

const File = styled.div(
  {
    boxSizing: 'border-box',

    '& span': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  display,
  flexbox,
  layout,
  space,
  color,
  border,
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

const Success = styled.div(
  {},
  display,
  flexbox,
);

const SuccessEmoji = styled.span(
  {},
  typography,
  display,
  flexbox,
);

const SuccessTitle = styled.h4(
  {
    textAlign: 'center'
  },
  typography,
  display,
  flexbox,
  color,
  space,
);

const SuccessSubtitle = styled.span(
  {
    textAlign: 'center',
  },
  typography,
  display,
  flexbox,
  color,
  space,
);

class RequestDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.router.query.email || "",
      name: "",
      menus: [],
      isSuccess: false,
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { name, email, menus } = this.state
    const data = {
      name,
      email,
      menus: []
    }
    base.addToCollection('users', data)
      .then((data) => {
        console.log(data.id)
        if (menus.length > 0) {
          this.handleUpload(data.id)
        } else {
          this.setState({
            isSuccess: true
          })
        }
      }).catch(err => {
      console.log(err);
    });
  }

  handleUpload(id) {
    const files = this.state.menus
    let downloadLinks = []
    const self = this
    files.forEach(function(file) {
      var metadata = {
        contentType: 'image/jpeg'
      };
      var uploadTask = storageRef.child(`users/${id}/menus/${file.name}`).put(file, metadata);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, function(error) {

      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          console.log('unauthorized');
          break;

        case 'storage/canceled':
          console.log('canceled');
          break;

        case 'storage/unknown':
          console.log('idk');
          break;
      }
    }, function() {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        downloadLinks.push(downloadURL)
        console.log(downloadLinks);
        if (downloadLinks.length === files.length) {
          console.log('files uploaded');
          const data = {
            menus: downloadLinks
          }
          base.updateDoc(`users/${id}`, data)
          .then(() => {
              console.log('doc updated');
              self.setState({
                isSuccess: true
              })
            }).catch(err => {
              console.log(err);
          });
        }
      });
      });
    })
  }

  handleDrop(files) {
    console.log(files);
    let { menus } = this.state
    files.forEach((file) => menus.push(file))
    console.log(menus);
    this.setState({
      menus
    })
  }

  removeFile(i) {
    let { menus } = this.state
    menus.splice(i, 1)
    this.setState({
      menus
    })
  }

  render() {
    return (
      <PageWrapper>
        <Head>
          <title>
            Get a free custom demo | OurMenu
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
        <Nav transparent/>
        <PageHeader
          width="100vw"
          minHeight="50vh"
          bg="blue"
          color="black"
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
            {this.state.isSuccess
              ?
              <Success
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
              >
                <SuccessEmoji
                  fontSize="4rem"
                >
                  🎉
                </SuccessEmoji>
                <SuccessTitle
                  fontSize="1.75rem"
                  fontWeight="bold"
                  color="black"
                  m="0"
                  mb="16px"
                >
                  {this.state.name.split(" ")[0]}, your custom demo is on the way.
                </SuccessTitle>
                <SuccessSubtitle
                  fontSize="1.25rem"
                  fontWeight="regular"
                  color="black"
                >
                  We'll send the details to <strong>{this.state.email}</strong> when it's ready.
                </SuccessSubtitle>
              </Success>
              :
              <Fragment>
                <Dropzone
                  multiple
                  onDrop={acceptedFiles => this.handleDrop(acceptedFiles)}
                >
                  {({getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject}) => (
                    <section>
                      <Uploader
                      border="2px solid"
                      borderColor="lightGrey"
                      borderRadius="8px"
                      borderStyle="dashed"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                      width="100%"
                      height="100%"
                      minHeight="160px"
                      p="48px"
                      mb="16px"
                      fontSize="1rem"
                      fontWeight="bold"
                      color="grey"
                      bg={isDragActive ? 'lightGrey' : 'white'}
                      {...getRootProps()}>
                        <input {...getInputProps()}/>
                        Drop your menus here or click to upload
                      </Uploader>
                    </section>
                  )}
                </Dropzone>
                {this.state.menus.map((file, i) =>
                  <File key={file.path}
                    width="100%"
                    display="inline-flex"
                    justifyContent="space-between"
                    alignItems="center"
                    p="16px 24px"
                    borderRadius="8px"
                    bg="black"
                    color="white"
                    mb="8px"
                  >
                    <span>{file.path}</span>
                    <span onClick={() => this.removeFile(i)}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                      </svg>
                    </span>
                  </File>
                )}
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
              </Fragment>
            }
          </Form>
        </PageContent>
        <Footer />
      </PageWrapper>
    );
  }

}

export default withRouter(RequestDemo);
