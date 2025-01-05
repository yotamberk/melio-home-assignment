import React, { ReactNode } from 'react';
import '../styles.css';

import './IconButton.css';
import { BaseButton } from './BaseButton';

/* 
TODO: 
- accessiblity
- support for different sizes
- pass custom style as props?
*/

export const IconButton = ({
  children,
  onClick,
  disabled,
}: {
  children: ReactNode,
  onClick?: () => void,
  disabled?: boolean,
}) => {
  return (
    <BaseButton
      onClick={onClick}
      disabled={disabled}
      type="icon"
    >
      {children}
    </BaseButton>
  );
};
