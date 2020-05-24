import React from 'react';

import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet';
import { PageHeader } from 'components/page-header/PageHeader';
import { AboutColumn } from 'components/about-col/AboutColumn';
import { socialItems } from 'components/app-layout/AppLayout';

export interface BlogNode {
  node: {
    snippet: string
    frontmatter: {
      title: string
      date: string
    }
  }
}

export interface BlogPageProps {
  data: {
    allMarkdownRemark: {
      edges: BlogNode[]
    }
  }
}

// tslint:disable no-default-export
export const BlogPage = ({ data }: BlogPageProps) => {
  return (
  <>

    <Helmet title="Posts - Ngoc Nguyen's Personal Blog" />

    <div className="container row" style={{ 
        marginLeft: 'auto', 
        marginRight: 'auto' 
      }}>
      <aside className="col-xs-3">
        <AboutColumn social={socialItems} />
      </aside>
      <section className="col-xs-9">
        <header>
          <PageHeader>Blog Posts</PageHeader>
        </header>

        {data.allMarkdownRemark.edges.map((edge, edge_ix) => 
          <article key={edge_ix}>
            <header>{edge.node.frontmatter.title}</header>
            <div dangerouslySetInnerHTML={{ __html: edge.node.snippet }} />
          </article>
        )}
      </section>
    </div>

  </>
)};

export const query = graphql`
query PostsQuery {
  allMarkdownRemark(
    limit: 25, 
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
        }
      }
    }
  }
}
`

export default BlogPage;