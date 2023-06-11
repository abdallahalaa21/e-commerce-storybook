import type { Meta } from '@storybook/react';

import Button from '../components/button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    children: 'Button',
  },
};

export const Success = {
  args: {
    children: 'Subscribed !',
    variant: 'success',
  },
};

export const Light = {
  args: {
    children: 'Button',
    variant: 'light',
  },
};
