import React, { ReactNode } from 'react';

import { PostTag } from './PostTag';

import classnames from 'classnames';

import * as s from './PostBrief.module.scss'

export interface PostBriefProps {
  title: string;
  slug: string;
  tags?: string[];
  children: ReactNode;
  readingTime: string;
  small?: boolean;
  style?: object;
}

export const PostBrief = ({
  title,
  tags,
  slug,
  readingTime,
  children,
  small,
  style,
}: PostBriefProps) => (
  <article className={classnames(s.post_brief, {[s.small] : small})} style={style}>
    <header className={classnames({[s.small] : small})}>
      <a 
        className={classnames({[s.small] : small})} 
        href={slug} style={{ marginRight: 12 }}
        title={title}
      >
        {tags && tags.map((tag, tag_ix) => 
          <PostTag key={tag_ix} title={tag} />
        )}
        {title}
      </a>
      <div className={classnames(s.post_brief__meta, {[s.small] : small})}>
        <svg className="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
        {' '}
        {readingTime}
      </div>
    </header>
    <div className={classnames(s.post_brief__content, {[s.small] : small})}>
      {children}
    </div>
    <a
      href="#page-title" 
      className={classnames(s.post_brief__back_top, {[s.small] : small})}
    >
      Back to Top ↑
    </a>
  </article>
)