import React, { ReactNode } from 'react';

import OpenLink from '../../assets/svg/open-link.svg';
import { HeaderLink } from 'components/header/HeaderLink';

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';

import * as s from './BlockText.module.scss';

import classnames from 'classnames';

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
        <div className={classnames(s.block__col, {[s.full_width]: fullWidth})}>
          <h3 className={s.block__heading}>
            {heading}
            {linkTo && <HeaderLink
              icon={<OpenLink />}
              to={linkTo}
            />}
          </h3>
          <div 
            className={classnames({"row": fullWidth, [s.block__description]: !fullWidth})}
            style={fullWidth ? { marginLeft: "-2rem", marginRight: "-2rem" } : undefined}
          >
            {description}
          </div>
        </div>
      </Row>
    </div>
  </Container>
);
