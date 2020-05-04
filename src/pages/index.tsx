import React from 'react';
import { Helmet } from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';

// tslint:disable no-default-export
export default () => (
  <>
    <Helmet title="Home" />

    <Intro>
      Software Developer. Coffee Addict ☕️.<br/>I do{' '}
      <Highlight>Python</Highlight>,{' '}
      <Highlight>Javascript</Highlight>,{' '}
      <Highlight>.NET</Highlight>,{' '}
      <Highlight>Mobile</Highlight>, and <Highlight>AI</Highlight> stuffs.
    </Intro>

    <BlockText
      heading="About me"
      description={
        <>
          <div style={{ fontWeight: 'bold', paddingBottom: 8 }}>
            Currently open for freelance!
          </div>
          <p>
            Currently employed at{' '}
            <a href="https://2359media.com" target="_blank" rel="noopener noreferrer">
              2359 Media
            </a>{' '}
            as a full-time Software Developer. 
            I build high quality, maintainable and user-friendly digital products.
            I also do AI from experiments to production, with a strong focus on Natural Language Processing (NLP).
          </p>
        </>
      }
    />
  </>
);
