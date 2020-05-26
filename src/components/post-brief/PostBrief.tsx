import React, { ReactNode } from 'react';

import s from './PostBrief.scss'

export interface PostBriefProps {
  title: string;
  children: ReactNode;
}

export const PostBrief = ({
  title,
  children,
}: PostBriefProps) => (
  <article className={s.post_brief}>
    <header>{title}</header>
    <div className={s.post_brief__content}>
      {children}
    </div>
    <a 
      href="#page-title" 
      className={s.post_brief__back_top}
    >
      Back to Top ↑
    </a>
  </article>
)