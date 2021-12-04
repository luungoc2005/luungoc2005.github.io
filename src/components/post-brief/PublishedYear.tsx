import React, { ReactNode } from 'react';

import * as s from './PublishedYear.module.scss'

export interface PublishedYearProps {
  children: ReactNode;
}

export const PublishedYear = ({ children }: PublishedYearProps) => 
  <h1 className={s.published_year}>{children}</h1>