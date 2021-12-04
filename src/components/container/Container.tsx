import React, { ReactNode } from 'react';

import * as s from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <section className={s.container}>{children}</section>
);
