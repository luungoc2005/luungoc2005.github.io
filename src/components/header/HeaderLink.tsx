import React, { ReactNode } from 'react';

import { Link } from 'components/link/Link';

import * as s from './HeaderLink.module.scss';

interface HeaderLinkProps {
  name?: string;
  to: string;
  icon?: ReactNode;
}

export const HeaderLink = ({ name, to, icon }: HeaderLinkProps) => {
  const content = () => (
    <>
      {icon && React.cloneElement(icon as any, { className: s.link__icon })}
      {name}
    </>
  );

  return (
    <Link className={s.link} to={to}>
      {content()}
    </Link>
  );
};
