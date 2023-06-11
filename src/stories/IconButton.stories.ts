import type { Meta } from '@storybook/react';

import Button from './IconButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/IconButton',
  component: Button,
};

export default meta;

export const Default = {};
