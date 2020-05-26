import React, { ReactNode } from 'react';

import { Helmet } from 'react-helmet';
import { AboutColumn } from 'components/about-col/AboutColumn';
import { socialItems } from 'components/app-layout/AppLayout';

import s from './PostsLayout.scss'

export interface PostsLayoutProps {
  title?: string;
  children: ReactNode;
}

// tslint:disable no-default-export
export const PostsLayout = ({ 
  children,
  title = "Posts - Ngoc Nguyen's Personal Blog"
}: PostsLayoutProps) => {
  return (
  <>

    <Helmet title={title} />

    <div className="container row" style={{ 
        marginLeft: 'auto', 
        marginRight: 'auto' 
      }}>

      <aside className={`col-12 col-sm-3 ${s.side_bar}`}>
        <AboutColumn social={socialItems} />
      </aside>

      <section className={`col-12 col-sm-9 ${s.posts_content}`}>
        {children}
      </section>
    </div>

  </>
)};
