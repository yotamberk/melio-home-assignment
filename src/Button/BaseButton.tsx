import React, { ReactNode } from 'react';
import '../styles.css';

import './BaseButton.css';

/* 
TODO: 
- accessiblity
- split icon button into separate component
- support for different sizes
- support for loading state
- pass custom style as props?
*/

export const BaseButton = ({
  children,
  onClick,
  disabled,
  variant = 'text',
  size = 'medium',
  color,
  type,
  fullWidth,
  width,
}: {
  children: ReactNode,
  onClick?: () => void,
  disabled?: boolean,
  type: 'button' | 'icon',
  size: 'small' | 'medium' | 'large',
  variant?: 'text' | 'outlined' | 'contained',
  color?: 'primary' | 'secondary' | 'error' | 'success',
  fullWidth?: boolean,
  width?: React.CSSProperties['width']
}) => {
  const className = [
    'melio-btn', `melio-btn-${variant}`, 
    `melio-btn-type-${type}`,
    type === 'button' && `melio-btn-size-${size}`,
    color && `melio-btn-${color}`,
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
      {children}
    </button>
  );
};
