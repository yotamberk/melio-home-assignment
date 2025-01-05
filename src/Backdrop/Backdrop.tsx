
import React from 'react';
import './Backdrop.css';

export const Backdrop = ({ open, onClick } : { open: boolean, onClick?: () => void }) => {
  const backdropClassName = [ 'melio-backdrop', open && 'melio-backdrop-open'].filter(Boolean).join(' ');
  return (
    <div className={backdropClassName} onClick={onClick || undefined}></div>
  )
}