import HeaderSigninButton from '../lib/components/HeaderSigninButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'buttons/HeaderSigninButton',
  component: HeaderSigninButton,
} satisfies Meta<typeof HeaderSigninButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    text: 'SIGNIN',
    path: '',
  },
};
