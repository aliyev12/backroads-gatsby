import React from 'react';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';

const blog = ({ data: { blogBcg } }) => {
  return (
    <Layout>
      <StyledHero home="true" img={blogBcg.childImageSharp.fluid}></StyledHero>
    </Layout>
  );
};

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default blog;
