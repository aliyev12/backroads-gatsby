import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Contact from '../components/Contact/Contact';

const contact = ({ data: { connectBcg } }) => {
  return (
    <Layout>
      <StyledHero img={connectBcg.childImageSharp.fluid} />
      <Contact/>
    </Layout>
  )
}

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default contact;