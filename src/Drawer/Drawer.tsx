import React from 'react';
import './Drawer.css';
import { Button } from '../Button';
import { Backdrop } from '../Backdrop';
import CloseButton from '../CloseButton';

/*
TODO: 
- when closed, remove from DOM
- anchor prop (default to <body>, using React.Portal)
- position prop (default to 'right')
- backdrop prop (default to true)
- variant prop ('temporary' (default) | 'persistent' | 'permanent')
*/

export const Drawer = (
  { 
    open = true,
    onClose,
    header,
    children, 
  }: 
  { 
    open: boolean,
    onClose: () => void,
    header: string,
    children: React.ReactNode,
  }) => {
    const drawerClassName = [ 'melio-drawer', open && 'melio-drawer-open'].filter(Boolean).join(' ');

  return (
    <>
    <Backdrop open={open} onClick={onClose} />
    <div className={drawerClassName}>
      <div className='melio-drawer-header'>
        
        <div className='melio-drawer-header-text'>{header}</div>

        <CloseButton onClick={onClose} />
      </div>

      {children}
    </div>
    </>
  );
}