import React from 'react';

import { graphql } from "gatsby"

import { PostsLayout } from 'components/posts-layout/PostsLayout'
import { PageHeader } from 'components/page-header/PageHeader'
import { DiscussionEmbed } from 'disqus-react';

import _format from 'date-fns/format'

import s from './BlogPost.scss'

export interface BlogPostProps {
  data: {
    markdownRemark: {
      html: string
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
}

// tslint:disable no-default-export
export const BlogPost = ({ data }: BlogPostProps) => {
  return (
  <PostsLayout 
    title={`${data.markdownRemark.frontmatter.title} - Ngoc Nguyen's Personal Blog`}
  >

    <header>
      <PageHeader>{data.markdownRemark.frontmatter.title}</PageHeader>
    </header>

    <section className={s.post_meta}>
      <span>
        <svg className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg>
        {_format(new Date(data.markdownRemark.frontmatter.date), "MMM d")}
        {' · '}
        {data.markdownRemark.fields.readingTime.text}
      </span>
    </section>

    <article 
      className={s.post_content}
      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} 
    />

    <DiscussionEmbed
      shortname="luungoc2005"
      config={{
        url: window.location.href,
        identifier: data.markdownRemark.fields.slug,
        title: data.markdownRemark.frontmatter.title,
      }}
    />
  </PostsLayout>
)};

export const query = graphql`
  query BlogPostQuery ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

export default BlogPost;