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
    icon,
    children, 
  }: 
  { 
    open: boolean,
    onClose: () => void,
    title?: string,
    icon?: React.ReactNode,
    children: React.ReactNode,
  }) => {
    const className = [ 'melio-modal',  open && 'melio-modal-open'].filter(Boolean).join(' ');

  return (
    <>
      <Backdrop open={open} onClick={onClose} />

      <div className={className}>
        <div className='melio-modal-container'>
          <div className='melio-modal-header'>
            {
              icon && (
                <div className='melio-modal-header-icon'>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 30.6667C24.1002 30.6667 30.6667 24.1002 30.6667 16C30.6667 7.89986 24.1002 1.33337 16 1.33337C7.89982 1.33337 1.33333 7.89986 1.33333 16C1.33333 24.1002 7.89982 30.6667 16 30.6667ZM16 18.6667C15.2636 18.6667 14.6667 18.0698 14.6667 17.3334V9.33337C14.6667 8.59699 15.2636 8.00004 16 8.00004C16.7364 8.00004 17.3333 8.59699 17.3333 9.33337V17.3334C17.3333 18.0698 16.7364 18.6667 16 18.6667ZM14.6667 22.6667C14.6667 21.9303 15.2636 21.3334 16 21.3334C16.7364 21.3334 17.3333 21.9303 17.3333 22.6667C17.3333 23.4031 16.7364 24 16 24C15.2636 24 14.6667 23.4031 14.6667 22.6667Z" fill="#D80E25"/>
                  </svg>
                </div>
            )
            }
            <div className='melio-modal-header-text'>{title || ''}</div>

            <div className='melio-modal-close'>
              <CloseButton onClick={onClose} />
            </div>
          </div> 

          <div className='melio-modal-content'>
          {children}
          </div>

          <div className='melio-modal-footer'>
            <Button variant='outlined' onClick={onClose} fullWidth>Cancel</Button>
            <Button variant='contained' color='error' fullWidth>Delete</Button>
          </div>
        </div>
      </div>
    </>
  );
}