import { Button } from '../Button';
import { Card } from './Card';
import React from 'react';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Card',
  component: Card,
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
    title: 'I am a Melio card!',
    caption: 'I am a Melio card caption!',
    action: <Button variant='contained'>Action</Button>,
  }
};

