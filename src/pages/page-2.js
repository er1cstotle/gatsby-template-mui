import React from 'react';

import { Link } from 'gatsby';
import { Button, Container } from '@material-ui/core';
import SEO from '../components/seo';

const SecondPage = () => (
  <Container maxWidth={'md'}>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Container>
);

export default SecondPage;
