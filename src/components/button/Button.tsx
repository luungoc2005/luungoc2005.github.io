import React, { ReactNode } from 'react';

import { Link } from 'components/link/Link';

import * as s from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?(): void;
}

export const Button = ({ children, href, onClick }: ButtonProps) => {
  const isLink = typeof href !== 'undefined';

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
