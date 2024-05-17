import React, { ReactNode } from 'react';

import { Container } from 'components/container/Container';

import { Link } from 'components/link/Link';

import * as s from './Footer.module.scss';

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
              <Link alt={item.description} to={item.to} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </div>
);
