import React from 'react';
import Layout from '../components/Layout';
import Header from '../examples/RegularHeader';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';

const tours = ({ data: { defaultBcg } }) => {
  return (
    <Layout>
        <StyledHero img={defaultBcg.childImageSharp.fluid}></StyledHero>
    </Layout>
  );
};

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default tours;
