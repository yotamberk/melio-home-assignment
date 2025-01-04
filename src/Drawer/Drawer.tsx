import React from 'react';
import './Drawer.css';

export const Drawer = (
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
    const className = [ 'melio-drawer'].filter(Boolean).join(' ');
    
  return (
  <div className={className}>
    {children}
  </div>
  );
}