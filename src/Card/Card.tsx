import React from 'react';
import './Card.css';

export const Card = (
  { 
    children, 
    variant = 'outlined',
  }: 
  { 
    variant?: 'outlined' | 'raised',
    children: React.ReactNode,
  }) => {
    const className = [ 'melio-card', `melio-card-${variant}` ].filter(Boolean).join(' ');
  return (
  <div className={className}>
    {children}
  </div>
  );
}