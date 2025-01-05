import React from 'react';
import './Card.css';

export const Card = (
  { 
    variant = 'outlined',
    title,
    caption,
    action,
  }: 
  { 
    variant?: 'outlined' | 'raised',
    title: string,
    caption: string,
    action?: React.ReactNode,
  }) => {
    const className = [ 'melio-card', `melio-card-${variant}` ].filter(Boolean).join(' ');
  return (
  <div className={className}>
    <div className='melio-card-container'>
    <div className='melio-card-content'>
      <div className='melio-card-title'>{title}</div>
      <div className='melio-card-caption'>{caption}</div>
    </div>
    {
      action && <div className='melio-card-action'>
      {action}
    </div>
  }
  </div>
  </div>
  );
}