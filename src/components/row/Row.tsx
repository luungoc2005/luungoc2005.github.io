import React, { ReactNode } from 'react';

import * as s from './Row.module.scss';

interface RowProps {
  children: ReactNode;
}

export const Row = ({ children }: RowProps) => <div className={s.row}>{children}</div>;
