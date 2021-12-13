import React, { ReactNode } from 'react';

import { Helmet } from 'react-helmet';
import { AboutColumn } from 'components/about-col/AboutColumn';
import { socialItems } from 'components/app-layout/AppLayout';

import * as s from './PostsLayout.module.scss'
import './globals.css'

import classnames from 'classnames';

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
  <div className={s.layout}>

    <Helmet title={title} />

      <div className="container-fluid row" style={{ 
        marginLeft: 'auto', 
        marginRight: 'auto' 
      }}>

      <aside className={classnames("col-xs-12", "col-sm-3", s.side_bar)}>
        <AboutColumn social={socialItems} />
      </aside>

      <section className={classnames("col-xs-12", "col-sm-9", s.posts_content)}>
        {children}
      </section>
    </div>

  </div>
)};
