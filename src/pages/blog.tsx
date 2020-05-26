import React from 'react';

import { graphql } from 'gatsby'
import { PostsLayout } from 'components/posts-layout/PostsLayout'
import { PageHeader } from 'components/page-header/PageHeader'
import { PostBrief } from 'components/post-brief/PostBrief'
import { PublishedYear } from 'components/post-brief/PublishedYear'

export interface BlogNode {
  node: {
    snippet: string
    fields: {
      readingTime: {
        text: string  
      }
      slug: string
    }
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
  const publishedYears = data.allMarkdownRemark.edges.map((edge) => 
    new Date(edge.node.frontmatter.date).getFullYear()
  )
  return (
  <PostsLayout>

      <header>
        <PageHeader>Blog Posts</PageHeader>
      </header>

      {data.allMarkdownRemark.edges.map((edge, edge_ix) => {
        return (
          <React.Fragment key={edge_ix}>
            {edge_ix == 0 || publishedYears[edge_ix] != publishedYears[edge_ix - 1]
            ? <PublishedYear>{publishedYears[edge_ix]}</PublishedYear>
            : <></>}
            <PostBrief
              title={edge.node.frontmatter.title}
              readingTime={edge.node.fields.readingTime.text}
              slug={edge.node.fields.slug}
            >
              <div dangerouslySetInnerHTML={{ __html: edge.node.snippet }} />
            </PostBrief>
          </React.Fragment>
        )
      })}

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

export default BlogPage;