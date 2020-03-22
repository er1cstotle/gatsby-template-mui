import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../header';
import './layout.css';


const Layout = ({ children, ...props }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header {...props}/>

      {children}

      <footer>
          © {new Date().getFullYear()}, Built with
        {' '}
        {/* <a href="https://www.gatsbyjs.org">Gatsby</a> */}
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
