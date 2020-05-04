import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

// import Logo from '../../assets/svg/ueno-logo.svg';
// import Dribbble from '../../assets/svg/dribbble.svg';
import Twitter from '../../assets/svg/twitter.svg';
import Github from '../../assets/svg/github.svg';
// import Instagram from '../../assets/svg/instagram.svg';
import Facebook from '../../assets/svg/facebook.svg';
import Linkedin from '../../assets/svg/linkedin.svg';

import { helmet } from '../../utils/helmet';
import { Header } from '../header/Header';
import { HeaderLink } from '../header/HeaderLink';
import { Footer } from '../footer/Footer';
import { Devtools } from '../devtools/Devtools';

import s from './AppLayout.scss';

interface AppLayoutProps {
  children: ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

// tslint:disable no-default-export
export default ({ children }: AppLayoutProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />

    <Header>
      <HeaderLink name="about" to="/about" />
      <HeaderLink name="github" to="https://github.com/ueno-llc" icon={<Github />} />
    </Header>

    {children}

    <Footer
      // logo={<Logo />}
      logo={<></>}
      social={[
        // { icon: <Dribbble />, to: 'https://dribbble.com/ueno' },
        { icon: <Twitter />, to: 'https://twitter.com/luungoc2005' },
        { icon: <Github />, to: 'https://github.com/luungoc2005' },
        // { icon: <Instagram />, to: 'https://www.instagram.com/luungoc2005' },
        { icon: <Facebook />, to: 'https://www.facebook.com/luungoc2005' },
        { icon: <Linkedin />, to: 'https://www.linkedin.com/in/luungoc2005/' },
      ]}
    />

    {isDev && <Devtools />}
  </div>
);
