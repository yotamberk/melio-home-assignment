import React from 'react';
import './Modal.css';
import { Backdrop } from '../Backdrop';
import CloseButton from '../CloseButton';
import { Button } from '../Button';

/*
TODO: 
- actions for footer
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
                  {icon}
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
            <Button variant='outlined' onClick={onClose} width={100} fullWidth>Cancel</Button>
            <Button variant='contained' color='error' width={100} fullWidth>Delete</Button>
          </div>
        </div>
      </div>
    </>
  );
}