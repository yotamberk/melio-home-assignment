import { Drawer } from './Drawer';
import React from 'react';
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
  args: {
    children: 'I am a Melio drawer!',
  }
};

