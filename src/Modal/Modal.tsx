import React from 'react';
import './Modal.css';

export const Modal = (
  { 
    open,
    onClose,
    children, 
  }: 
  { 
    open: boolean,
    onClose: () => void,
    children: React.ReactNode,
  }) => {
    const className = [ 'melio-modal'].filter(Boolean).join(' ');
    
  return (
  <div className={className}>
    {children}
  </div>
  );
}