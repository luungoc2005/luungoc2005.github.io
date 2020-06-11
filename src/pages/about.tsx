import React from 'react';
import { Helmet } from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { BlockText } from 'components/block-text/BlockText';

import { OutboundLink } from "gatsby-plugin-google-analytics";

// tslint:disable no-default-export
export default () => (
  <>
    <Helmet title="About - Ngoc Nguyen's Personal Blog" />

    <Intro>About me</Intro>

    <BlockText
      heading=""
      description={<>
        <p>Thanks for visiting this page. It means a lot to me that you are interested 🥰</p>

        <p>
          I am still in the process of building this personal site, but if you are up for a chat, hit me at{' '}
          <OutboundLink href="mailto:luungoc2005@gmail.com">luungoc2005@gmail.com</OutboundLink>{' '}
          or{' '}<OutboundLink href="https://twitter.com/luungoc2005">@luungoc2005</OutboundLink>{' '}
          (although I don't frequent Twitter as much).
        </p>

        <p>Please check back the <a href="/blog">blog</a> page every once in a while and I might have something that will worth your while 😋</p>
      </>}
    />
  </>
);