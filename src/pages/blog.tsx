import React from 'react';

import { graphql } from 'gatsby'
import { PostsLayout } from 'components/posts-layout/PostsLayout'
import { PageHeader } from 'components/page-header/PageHeader'
import { PostBrief } from 'components/post-brief/PostBrief'

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
  <PostsLayout>

      <header>
        <PageHeader>Blog Posts</PageHeader>
      </header>

      {data.allMarkdownRemark.edges.map((edge, edge_ix) => 
        <PostBrief 
          key={edge_ix} 
          title={edge.node.frontmatter.title}
        >
          <div dangerouslySetInnerHTML={{ __html: edge.node.snippet }} />
        </PostBrief>
      )}

  </PostsLayout>
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