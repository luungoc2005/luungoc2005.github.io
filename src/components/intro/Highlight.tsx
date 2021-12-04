import React, { ReactNode } from 'react';
import classnames from 'classnames';
import * as s from './Highlight.module.scss';

interface HighlightProps {
  children: ReactNode;
}

export const Highlight = ({ children }: HighlightProps): any => {
  return (children as string)?.split(' ').map((word, index, words) => (
    <span key={word} className={classnames(s.highlight, { isFirst: words.length > 1 && index === 0 })}>
      <span className={s.highlight__text}>{word}</span>
      <span className={s.highlight__color} />
    </span>
  ));
};
