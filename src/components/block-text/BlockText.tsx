import React, { ReactNode } from 'react';

import OpenLink from '../../assets/svg/open-link.svg';
import { HeaderLink } from 'components/header/HeaderLink';

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';

import s from './BlockText.scss';

interface BlockTextProps {
  heading: string;
  description: ReactNode;
  linkTo?: string;
  fullWidth?: boolean;
}

export const BlockText = ({ 
  heading, 
  description, 
  linkTo,
  fullWidth,
}: BlockTextProps) => (
  <Container>
    <div className={s.block}>
      <Row>
        <div className={`${s.block__col}${fullWidth ? " " + s.full_width : ""}`}>
          <h3 className={s.block__heading}>
            {heading}
            {linkTo && <HeaderLink
              icon={<OpenLink />}
              to={linkTo}
            />}
          </h3>
          <div 
            className={fullWidth ? "row" : s.block__description}
            style={fullWidth ? { marginLeft: "-2rem", marginRight: "-2rem" } : undefined}
          >
            {description}
          </div>
        </div>
      </Row>
    </div>
  </Container>
);
