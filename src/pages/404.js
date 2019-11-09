import React from 'react';
import Layout from '../components/Layout';
import styles from '../css/error.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';

const Error = ({ children }) => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="page does not exist">
          <AniLink to="/" className="btn-white">
            back to home page
          </AniLink>
          {children}
        </Banner>
      </header>
    </Layout>
  );
};

export default Error;