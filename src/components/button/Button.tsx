import React, { ReactNode } from 'react';

import { Link } from 'components/link/Link';

import { OutboundLink } from "gatsby-plugin-google-analytics";

import * as s from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?(): void;
}

export const Button = ({ children, href, onClick }: ButtonProps) => {
  const isLink = typeof href !== 'undefined';
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(href || '');

  if (isExternal) {
    return (
      <OutboundLink className={s.button} target="_blank" rel="noopener noreferrer" href={href}>
        {children}
      </OutboundLink>
    );
  }

  if (isLink) {
    return (
      <Link className={s.button} to={href || '#'}>
        {children}
      </Link>
    );
  }

  return (
    <button className={s.button} onClick={onClick}>
      {children}
    </button>
  );
};
