import React, { FC } from 'react';
import { Icon } from '../../components';

import './TextOverlay.scss';

type TextOverLayProps = {
  title?: string;
  children?: React.ReactElement;
  verticalLineColor?: string;
};

export const TextOverLay: FC<TextOverLayProps> = ({ children }) => (
  <div className="text-overlay-wrapper">
    <Icon iconElement={'VIDEO'} />
    {children}
  </div>
);
