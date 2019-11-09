import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Header = () => {
  const {
    site: {
      siteMetadata: { author, title },
    },
  } = useStaticQuery(graphql`
    query Metadata {
      site {
        siteMetadata {
          description
          title
          author
          data {
            name
            age
          }
        }
      }
    }
  `);

  return (
    <div>
      <h1>title: {author}</h1>
      <h1>author: {title}</h1>
    </div>
  );
};

export default Header;
