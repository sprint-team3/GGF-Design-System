import HeaderSignupButton from '../lib/components/HeaderSignupButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'buttons/HeaderSignupButton',
  component: HeaderSignupButton,
} satisfies Meta<typeof HeaderSignupButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    text: 'SIGNUP',
    path: '',
  },
};
