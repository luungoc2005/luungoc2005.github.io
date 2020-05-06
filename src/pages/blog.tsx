import React from 'react';
import { Helmet } from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { AboutColumn } from 'components/about-col/AboutColumn';
import { socialItems } from 'components/app-layout/AppLayout';

// tslint:disable no-default-export
export default () => (
  <>
    <Helmet title="Posts - Ngoc Nguyen's Personal Blog" />

    <AboutColumn social={socialItems} />
    <Intro>Blog Posts</Intro>

  </>
);
