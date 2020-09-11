import React from 'react';
import { Helmet } from 'react-helmet';

import CKAD_Certificate from 'assets/images/ckad_from_cncfsite.png';
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

        <p>I will try to write semi-regularly on my current interests, so mostly likely will be web development and AI. That said, because I am still trying to find an audience, I might change and put more focus on certain topics in the future.</p>

        <p>Please check back the <a href="/blog">blog</a> page every once in a while and I might have something that will worth your while 😋</p>
      </>}
    />

    <BlockText
      heading="Certifications"
      description={<div style={{ marginTop: 20, display: 'flex' }}>
        <a href="https://www.youracclaim.com/badges/463bf288-9ee1-45bf-a047-e96beda7d770/public_url">
          <img alt="youracclaim.com - CKAD: Certified Kubernetes Application Developer" src={CKAD_Certificate} />
        </a>
        
        <a href="https://www.credential.net/480ed014-5c0c-4859-9354-a9d3d912eb28">
          <img alt="credential.net - Google Associate Cloud Engineer" src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/23109421?key=9a9b045e431b34684afeccdc9fc0e32b162fbacd2d24813e9f0875d79baf3400" />
        </a>
      </div>}
    />
  </>
);
