import React from 'react';

import * as s from './PostTag.module.scss'

const DEFAULT_COLOR = "#a6dcef";
const TAG_COLORS: { [key: string]: string; } = {
  "ai": "#edf492",
  "random": "#ffcbcb",
}

export interface PostTagProps {
  title: string
}

export const PostTag = ({ title }: PostTagProps) => (
  <span 
    className={s.post_tag} 
    style={{ backgroundColor: TAG_COLORS[title] || DEFAULT_COLOR }}
  >{title}</span>
)