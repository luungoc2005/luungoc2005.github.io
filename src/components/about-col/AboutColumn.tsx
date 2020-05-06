import React from 'react';

import s from './AboutColumn.scss';

import Avatar from 'assets/images/avatar.png';
import { Social } from 'components/footer/Footer';
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Location from 'assets/svg/location.svg';

interface AboutColumnProps {
  social: Social[];
}

export const AboutColumn = ({ social }: AboutColumnProps) => (
  <div className={s.about_col}>
    <div className={s.about_col__avatar}>
      <img alt="Avatar" src={Avatar} />
    </div>
    <div className={s.about_col__heading}>
      Ngoc Nguyen
    </div>
    <div className={s.about_col__description}>
      Software Developer, AI Enthusiast, Coffee Addict, plays Piano
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
            <OutboundLink alt={item.description} href={item.to} target="_blank" rel="noopener noreferrer">
              <span className={s.about_col__details__icon}>
                {item.icon}
              </span>
              <span className={s.about_col__details__text}>
                {item.description}
              </span>
            </OutboundLink>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
