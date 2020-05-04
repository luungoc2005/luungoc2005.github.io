import React, { ReactNode } from 'react';

import { Link } from 'components/link/Link';

import StarterLogo from 'assets/svg/starter-logo.svg';

import s from './Header.scss';

interface HeaderProps {
  children: ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
  <header className={s.header}>
    <div className={s.header__container}>
      <div className={s.header__content}>
        <Link to="/" className={s.header__logo}>
          {/* <StarterLogo className={s.header__logoSvg} /> */}
          <h1>Ngoc Nguyen</h1>
          <span>@Singapore</span>
        </Link>

        <div className={s.header__navigation}>{children}</div>
      </div>
    </div>
  </header>
);
