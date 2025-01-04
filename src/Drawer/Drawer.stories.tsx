import { Drawer } from './Drawer';
import React from 'react';
import { useArgs } from '@storybook/preview-api';
import { Button } from '../Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Drawer',
  component: Drawer,
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
      <div style={{ width: '700px', height: '700px', overflow:'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button {...args} onClick={onChange} variant='contained'>open</Button>
        <Drawer {...args} open={open} onClose={onChange} />
      </div>
    );
    
  },
  args: {
    open: false,
    children: <div style={{ padding: 16, width: 500 }}>I am a Melio Drawer!</div>,
    header: 'Drawer Header',
  }
};