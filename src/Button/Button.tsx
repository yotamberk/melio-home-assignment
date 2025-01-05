import React, { ReactNode } from 'react';
import '../styles.css';

import './Button.css';

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
  variant?: 'text' | 'outlined' | 'contained',
  color?: 'primary' | 'secondary' | 'error' | 'success',
  fullWidth?: boolean,
  width?: React.CSSProperties['width']
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
      onClick={onClick}
      disabled={disabled}
      style={width ? { width } : undefined}
    >
      {startIcon && <span className="melio-btn-text-with-icon melio-btn-start-icon">{startIcon}</span>}
      {children}
      {endIcon && <span className="melio-btn-text-with-icon melio-btn-end-icon">{endIcon}</span>}
    </button>
  );
};
