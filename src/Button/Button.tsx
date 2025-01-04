import React, { ReactNode } from 'react';
import '../styles.css';

import './Button.css';

/* 
TODO: 
- accessiblity
- split icon button into separate component
- support for different sizes
- support for loading state
- add tests
*/

export const Button = ({
  children = 'I am a Melio button!',
  onChange,
  disabled,
  variant = 'text',
  color = 'primary',
  startIcon,
  endIcon,
  fullWidth,
}: {
  children: ReactNode,
  onChange?: () => void,
  disabled?: boolean,
  startIcon?: ReactNode,
  endIcon?: ReactNode,
  variant?: 'text' | 'outlined' | 'contained',
  color?: 'primary' | 'secondary' | 'error' | 'success',
  fullWidth?: boolean,
}) => {
  const className = [
    'melio-btn', `melio-btn-${variant}`,
    `melio-btn-${color}`,
    typeof children === 'string' && `melio-btn-text-only`, 
    disabled && `melio-btn-disabled`, 
    fullWidth && `melio-btn-fullWidth`
  ].filter(Boolean).join(' ');

  return (
    <button
      className={className}
      onClick={onChange}
      disabled={disabled}
    >
      {startIcon && <span className="melio-btn-text-with-icon melio-btn-start-icon">{startIcon}</span>}
      {children}
      {endIcon && <span className="melio-btn-text-with-icon melio-btn-end-icon">{endIcon}</span>}
    </button>
  );
};
