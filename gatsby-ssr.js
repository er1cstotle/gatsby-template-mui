import React from 'react';
import Layout from 'components/global/layout';
import ThemeProvider from 'components/global/theme-provider';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

