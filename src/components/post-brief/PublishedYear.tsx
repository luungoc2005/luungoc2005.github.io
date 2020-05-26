import React, { ReactNode, Children } from 'react';

import s from './PublishedYear.scss'

export interface PublishedYearProps {
  children: ReactNode;
}

export const PublishedYear = ({ children }: PublishedYearProps) => 
  <h1 className={s.published_year}>{children}</h1>