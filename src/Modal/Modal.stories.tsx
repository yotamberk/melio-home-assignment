import { useArgs } from 'storybook/internal/preview-api';
import { Button } from '../Button';
import { Modal } from './Modal';
import React from 'react';
import type { Preview } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Modal',
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = {
    render: function Render(args) {
    const [{ open }, updateArgs] = useArgs();
 
    function onChange() {
      updateArgs({ open: !open });
    }
 
    return  (
      <div style={{ width: '900px', height: '900px', overflow:'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button {...args} onClick={onChange} variant='contained'>open</Button>
        <Modal {...args} open={open} onClose={onChange} />
      </div>
    );
  },
  args: {
    title: 'Modal header',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 30.6667C24.1002 30.6667 30.6667 24.1002 30.6667 16C30.6667 7.89986 24.1002 1.33337 16 1.33337C7.89982 1.33337 1.33333 7.89986 1.33333 16C1.33333 24.1002 7.89982 30.6667 16 30.6667ZM16 18.6667C15.2636 18.6667 14.6667 18.0698 14.6667 17.3334V9.33337C14.6667 8.59699 15.2636 8.00004 16 8.00004C16.7364 8.00004 17.3333 8.59699 17.3333 9.33337V17.3334C17.3333 18.0698 16.7364 18.6667 16 18.6667ZM14.6667 22.6667C14.6667 21.9303 15.2636 21.3334 16 21.3334C16.7364 21.3334 17.3333 21.9303 17.3333 22.6667C17.3333 23.4031 16.7364 24 16 24C15.2636 24 14.6667 23.4031 14.6667 22.6667Z" fill="#D80E25"/>
      </svg>
    ),
    children: <div>Lorem ipsum dolor sit amet, consectetur adipiscing Nullam a arcu est. Nulla facilisi. Donec nec sem aliquet, laoreet nisi et, bibendum tellus. Aenean sed nibh lorem.</div>,
  }
};


export const preview: Preview = {
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story, { parameters }) => {
      // 👇 Make it configurable by reading from parameters
      const { pageLayout } = parameters;
      switch (pageLayout) {
        case 'page':
          return (
            // Your page layout is probably a little more complex than this ;)
            <div className="page-layout">
              <Story />
            </div>
          );
        case 'page-mobile':
          return (
            <div className="page-mobile-layout">
              <Story />
            </div>
          );
        default:
          // In the default case, don't apply a layout
          return <Story />;
      }
    },
  ],
  args: {
    title: 'Modal header',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 30.6667C24.1002 30.6667 30.6667 24.1002 30.6667 16C30.6667 7.89986 24.1002 1.33337 16 1.33337C7.89982 1.33337 1.33333 7.89986 1.33333 16C1.33333 24.1002 7.89982 30.6667 16 30.6667ZM16 18.6667C15.2636 18.6667 14.6667 18.0698 14.6667 17.3334V9.33337C14.6667 8.59699 15.2636 8.00004 16 8.00004C16.7364 8.00004 17.3333 8.59699 17.3333 9.33337V17.3334C17.3333 18.0698 16.7364 18.6667 16 18.6667ZM14.6667 22.6667C14.6667 21.9303 15.2636 21.3334 16 21.3334C16.7364 21.3334 17.3333 21.9303 17.3333 22.6667C17.3333 23.4031 16.7364 24 16 24C15.2636 24 14.6667 23.4031 14.6667 22.6667Z" fill="#D80E25"/>
      </svg>
    ),
    children: <div>Lorem ipsum dolor sit amet, consectetur adipiscing Nullam a arcu est. Nulla facilisi. Donec nec sem aliquet, laoreet nisi et, bibendum tellus. Aenean sed nibh lorem.</div>,
  }
};