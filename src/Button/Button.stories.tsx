import { Button } from './Button';
import React from 'react';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Button',
  component: Button,
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

export const Default = {};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
/**
 * You can configure different variant.
 */

export const ColorsAndVariants = {
  args: {
    children: 'I am a colored contained Melio button!',
    color: 'error',
    variant: 'contained',
  }
}

export const StartIcon = {
  args: {
    startIcon: (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.204 9.99679C18.2058 9.50084 18.6093 9.10024 19.1052 9.10201C19.6012 9.10379 20.0018 9.50728 20 10.0032C19.9924 12.1286 19.3204 14.198 18.0791 15.912C16.8377 17.6262 15.0904 18.8968 13.0881 19.537C11.0857 20.1773 8.93457 20.1529 6.94678 19.4675C5.73582 19.0499 4.69719 18.3482 3.81126 17.4986V19.057C3.81126 19.5488 3.41258 19.9475 2.92078 19.9475C2.42898 19.9475 2.0303 19.5488 2.0303 19.057V15.1707C2.01694 15.0694 2.02106 14.967 2.04183 14.868C2.11053 14.4445 2.4779 14.1212 2.92078 14.1212H6.96611C7.45791 14.1212 7.8566 14.5199 7.8566 15.0117C7.8566 15.5035 7.45791 15.9022 6.96611 15.9022H4.75544C5.56161 16.7498 6.48388 17.4081 7.53222 17.7696C9.15389 18.3288 10.9078 18.3486 12.5412 17.8263C14.1747 17.304 15.6054 16.2657 16.6245 14.8585C17.6438 13.4511 18.1977 11.7485 18.204 9.99679Z" fill="#18191B"/>
      <path d="M0.894779 10.898C1.39073 10.8998 1.79421 10.4992 1.79599 10.0032C1.80226 8.25155 2.35621 6.54887 3.37546 5.14147C4.39456 3.73428 5.82528 2.69596 7.45883 2.17366C9.0922 1.65141 10.8461 1.67125 12.4678 2.2304C13.5161 2.59188 14.4384 3.25018 15.2446 4.09782H13.0339C12.5421 4.09782 12.1434 4.4965 12.1434 4.98831C12.1434 5.48011 12.5421 5.87879 13.0339 5.87879L17.0792 5.87879C17.5221 5.87879 17.8895 5.55546 17.9582 5.13197C17.9789 5.03296 17.9831 4.93055 17.9697 4.8293L17.9697 0.942973C17.9697 0.451173 17.571 0.052491 17.0792 0.052491C16.5874 0.052491 16.1887 0.451173 16.1887 0.942973V2.50139C15.3028 1.65176 14.2642 0.950053 13.0532 0.532508C11.0654 -0.15289 8.91429 -0.177274 6.91186 0.462975C4.90963 1.10317 3.16232 2.3738 1.92086 4.08803C0.679562 5.80204 0.00762003 7.8714 5.89331e-06 9.99678C-0.00177176 10.4927 0.398832 10.8962 0.894779 10.898Z" fill="#18191B"/>
    </svg>
    ),
  },
};

export const EndIcon = {
  args: {
    endIcon: (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.25 2.75C9.25 2.33579 8.91421 2 8.5 2C8.08579 2 7.75 2.33579 7.75 2.75V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.75V13.25C7.75 13.6642 8.08579 14 8.5 14C8.91421 14 9.25 13.6642 9.25 13.25V8.75H13.75C14.1642 8.75 14.5 8.41421 14.5 8C14.5 7.58579 14.1642 7.25 13.75 7.25H9.25V2.75Z" fill="#18191B"/>
    </svg>
    ),
  },
};

export const Sizes = {
  decorators: [(story) => <div style={{ width: 500 }}>{story()}</div>],
  args: {
    children: 'I\'m a small Melio button!',
    variant: 'contained',
    size: 'small',
  },
};


export const FullWidth = {
  decorators: [(story) => <div style={{ width: 500 }}>{story()}</div>],
  args: {
    children: 'I\'m a full width Melio button!',
    variant: 'contained',
    fullWidth: true,
  },
};

export const Disabled = {
  args: {
    children: 'I\'m a disabled Melio button!',
    variant: 'contained',
    disabled: true,
  },
};
