import React from 'react';
import './Modal.css';
import { Backdrop } from '../Backdrop';
import CloseButton from '../CloseButton';
import { Button } from '../Button';

/*
TODO: 
- use new html element <dialog> for modal
- when closed, remove from DOM
- add i18n support (to cancel button)

*/
export const Modal = (
  { 
    open,
    onClose,
    title,
    children, 
  }: 
  { 
    open: boolean,
    onClose: () => void,
    title?: string,
    children: React.ReactNode,
  }) => {
    const className = [ 'melio-modal',  open && 'melio-modal-open'].filter(Boolean).join(' ');

  return (
    <>
      <Backdrop open={open} onClick={onClose} />

      <div className={className}>
        <div className='melio-modal-header'>
          <div className='melio-modal-header-text'>{title || ''}</div>
          <CloseButton onClick={onClose} />
        </div> 

        {children}

        <div className='melio-modal-footer'>
          <Button variant='outlined' onClick={onClose} width={150}>Cancel</Button>
          <Button variant='contained' color='primary' width={150}>Save</Button>
        </div>
      </div>
    </>
  );
}