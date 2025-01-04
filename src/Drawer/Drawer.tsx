import React from 'react';
import './Drawer.css';
import { Button } from '../Button';

/*
TODO: 
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
    const backdropClassName = [ 'melio-drawer-backdrop', open && 'melio-drawer-backdrop-open'].filter(Boolean).join(' ');

  return (
    <>
    <div className={backdropClassName} onClick={onClose}></div>
    <div className={drawerClassName}>
      <div className='melio-drawer-header'>
        
        <div className='melio-drawer-header-text'>{header}</div>

        <Button onClick={onClose} variant='outlined'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1001 15.7097C14.4815 16.0968 15.1 16.0968 15.4815 15.7097C15.8629 15.3226 15.8629 14.695 15.4815 14.3079L9.38142 8.11796L15.714 1.69208C16.0954 1.30499 16.0954 0.6774 15.714 0.290314C15.3325 -0.0967716 14.714 -0.0967712 14.3326 0.290314L8.00002 6.7162L1.66749 0.290314C1.28603 -0.0967712 0.667559 -0.0967716 0.286097 0.290314C-0.0953657 0.6774 -0.0953653 1.30499 0.286097 1.69208L6.61863 8.11796L0.518585 14.3079C0.137122 14.695 0.137122 15.3226 0.518585 15.7097C0.900047 16.0968 1.51852 16.0968 1.89998 15.7097L8.00002 9.51972L14.1001 15.7097Z" fill="#18191B"/>
          </svg>
        </Button>
      </div>

      {children}
    </div>
    </>
  );
}