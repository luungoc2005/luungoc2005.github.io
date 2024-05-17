import React from 'react';

import { Helmet } from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';
import { Link } from 'components/link/Link';

import { PostBrief } from 'components/post-brief/PostBrief';
import { BlogPageProps } from './blog';
import { graphql } from 'gatsby'

// tslint:disable no-default-export
export default ({ data }: BlogPageProps) => (
  <>
    <Helmet title="Home - Ngoc Nguyen's Personal Blog" />

    <Intro>
      Software Developer. Coffee Addict ☕️.<br/>I do{' '}
      <Highlight>Javascript</Highlight>,{' '}
      <Highlight>Python</Highlight>,{' '}
      <Highlight>.NET</Highlight>,{' '}
      <Highlight>Golang</Highlight>,{' '}
      <Highlight>Mobile</Highlight>, and <Highlight>AI</Highlight> stuffs.
    </Intro>


    <BlockText
      fullWidth
      heading="Latest posts"
      linkTo="/blog"
      description={
        <>
          {data.allMarkdownRemark.edges.map((edge, edge_ix) => {
            return (
              <div key={edge_ix} className="col-sm-4 col-xs-12">
                <PostBrief
                  small
                  title={edge.node.frontmatter.title}
                  tags={edge.node.frontmatter.tags}
                  readingTime={edge.node.fields.readingTime.text}
                  slug={edge.node.fields.slug}
                >
                  <div dangerouslySetInnerHTML={{ __html: edge.node.snippet }} />
                </PostBrief>
              </div>
            )
          })}
        </>
      }
    />

    <BlockText
      heading="About me"
      description={
        <>
          {/* <p style={{ fontWeight: 'bold' }}>
            I am open for freelancing!
          </p> */}
          <p style={{ marginBottom: 40 }}>
            Currently employed at{' '}
            <Link to="https://www.grab.com/sg/" target="_blank" rel="noopener noreferrer">
              Grab Singapore
            </Link>{' '}
            as a full-time Software Developer. 
            I build high quality, maintainable and user-friendly digital products.
            I also do AI from experiments to production, with a strong focus on Natural Language Processing (NLP).
          </p>
        </>
      }
    />
  </>
);

export const query = graphql`
query IndexQuery {
  allMarkdownRemark(
    limit: 3, 
    filter: {
      fileAbsolutePath: {regex: "/posts/"}
      frontmatter: {published: { ne: false }}
    }, 
    sort: {fields: [frontmatter___date], order: DESC}
  ) {
    edges {
      node {
        snippet
        frontmatter {
          title
          date
          tags
        }
        fields {
          readingTime {
            text
          }
          slug
        }
      }
    }
  }
}
`