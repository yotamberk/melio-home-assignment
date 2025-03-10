import React, { ReactNode } from 'react';
import '../styles.css';

import './Button.css';
import { BaseButton } from './BaseButton';

/* 
TODO: 
- accessiblity
- split icon button into separate component
- support for different sizes
- support for loading state
- pass custom style as props?
*/

export const Button = ({
  children = 'I am a Melio button!',
  onClick,
  disabled,
  variant = 'text',
  color = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  fullWidth,
  width,
}: {
  children: ReactNode,
  onClick?: () => void,
  disabled?: boolean,
  startIcon?: ReactNode,
  endIcon?: ReactNode,
  size?: 'small' | 'medium' | 'large',
  variant?: 'text' | 'outlined' | 'contained',
  color?: 'primary' | 'secondary' | 'error' | 'success',
  fullWidth?: boolean,
  width?: React.CSSProperties['width']
}) => {
  return (
    <BaseButton
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      width={width}
      size={size}
      type='button'
    >
      {startIcon && <span className="melio-btn-text-with-icon melio-btn-start-icon">{startIcon}</span>}
      {children}
      {endIcon && <span className="melio-btn-text-with-icon melio-btn-end-icon">{endIcon}</span>}
    </BaseButton>
  );
};
