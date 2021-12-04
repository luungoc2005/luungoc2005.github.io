import React, { ReactNode } from 'react';

import * as s from './PageHeader.module.scss';

interface PageHeaderProps {
  children?: ReactNode;
}

export const PageHeader = ({ children }: PageHeaderProps) => (
  <div className={s.page_header}>
    <p className={s.page_header__text}>{children}</p>
  </div>
);
