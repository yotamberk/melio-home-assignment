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
    title: 'Melio Modal Title',
    children: <div style={{ padding: 8 }}>Lorem ipsum dolor sit amet, consectetur adipiscing Nullam a arcu est. Nulla facilisi. Donec nec sem aliquet, laoreet nisi et, bibendum tellus. Aenean sed nibh lorem.</div>,
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
};