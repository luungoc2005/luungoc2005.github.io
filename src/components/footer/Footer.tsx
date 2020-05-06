import React, { ReactNode } from 'react';

import { Container } from 'components/container/Container';

import { OutboundLink } from "gatsby-plugin-google-analytics";

import s from './Footer.scss';

export interface Social {
  icon: ReactNode;
  to: string;
  description: string;
}

interface FooterProps {
  logo: ReactNode;
  social: Social[];
}

export const Footer = ({ logo, social }: FooterProps) => (
  <div className={s.footer}>
    <Container>
      <div className={s.footer__content}>
        <a href="https://luungoc2005.github.io" target="_blank" rel="noopener noreferrer">
          {logo}
        </a>

        <ul className={s.footer__list}>
          {social.map((item) => (
            <li key={item.to} className={s.footer__item}>
              <OutboundLink alt={item.description} href={item.to} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </OutboundLink>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </div>
);
