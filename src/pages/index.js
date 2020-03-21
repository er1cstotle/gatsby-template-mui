import React from 'react';
import { Link } from 'gatsby';

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

import purple from '@material-ui/core/colors/purple';


import Button from '@material-ui/core/Button';

import Layout from 'components/layout';
import Image from 'components/image';
import SEO from 'components/seo';

const theme = createMuiTheme({
  palette: {
    primary: purple
  }
});

const IndexPage = () => (
  <ThemeProvider theme={theme}>

    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>

      <Button variant="contained" color="primary">
        Hello World
      </Button>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
