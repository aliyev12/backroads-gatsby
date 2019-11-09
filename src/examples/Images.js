import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import img from '../images/connectBcg.jpeg';
import Img from 'gatsby-image';

const getImages = graphql`
  query Images {
    fixed: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 400, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    fluid: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Images = () => {
  const { fixed, fluid } = useStaticQuery(getImages);

  return (
    <Wrapper>
      <article>
        <h3>basic image</h3>
        <img src={img} className="basic" />
      </article>
      <article>
        <h3>fixed image/blur</h3>
        <Img fixed={fixed.childImageSharp.fixed}></Img>
      </article>
      <article>
        <h3>fluid image/svg</h3>
        <div className="fluid">
          <Img fluid={fluid.childImageSharp.fluid}></Img>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;
  article {
    border: 3px solid red;
    padding: 1rem 0;
  }
  .basic {
    width: 100%;
  }
  .fluid {
    width: 200px;
  }
  @media (min-width: 992px) {
    display: block;
    grid-template-columns: 1rf 1fr 1fr;
    grid-column-gap: 1rem;
  }
`;

export default Images;
