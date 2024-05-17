import React from 'react';

import * as s from './AboutColumn.module.scss';

import Avatar from 'assets/images/avatar.png';
import { Link } from "components/link/Link";

import Location from 'assets/svg/location.svg';

import classnames from 'classnames';

interface AboutColumnProps {
  social: Social[];
}

export const AboutColumn = ({ social }: AboutColumnProps) => (
  <div className={classnames("row", s.about_col)}>
    <div className={classnames("col-xs-2", "col-sm-12", s.about_col__avatar)}>
      <img alt="Avatar" src={Avatar} />
    </div>
    <div className={classnames("col-xs-8", "col-sm-12", s.about_col__desc_container)}>
      <div className={s.about_col__heading}>
        Ngoc Nguyen
      </div>
      <div className={s.about_col__description}>
        Software Developer, AI Enthusiast, Coffee Addict, plays Piano
      </div>
    </div>
    <div className={s.about_col__details}>
      <ul>
        <li>
          <span className={s.about_col__details__icon}>
            <Location />
          </span>
          <span className={s.about_col__details__text}>
            Singapore
          </span>
        </li>
        {social.map((item) => (
          <li key={item.to}>
            <Link alt={item.description} to={item.to} target="_blank" rel="noopener noreferrer">
              <span className={s.about_col__details__icon}>
                {item.icon}
              </span>
              <span className={s.about_col__details__text}>
                {item.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
